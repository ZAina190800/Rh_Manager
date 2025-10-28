const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const Contrat = require("../models/contrat");

exports.CreateContrat = async (req, res, next) => {
    try{

        let {
            nom_contrat,
            date_debut_contrat,
            date_fin_contrat,
            ID_employe,
            ID_typec
        } = req.body;

        const datas = {
            "nom": nom_contrat,
            "date de début": date_debut_contrat,
            "date de fin": date_fin_contrat
        }

        console.log(datas)

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                console.log({message: `le champs ${key} ne doit pas être vide`})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const contrat = await Contrat.create({
            nom_contrat, date_debut_contrat, date_fin_contrat, ID_employe: ID_employe || null, ID_typec: ID_typec || null
        })

        if(!contrat){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})
            
            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }
        const data = contrat

         console.log({message: " Le contrat a été créer avec succès", data})
        return res.status(200).json({message:  " Le contrat a été créer avec succès", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }

}

exports.getContrat = async (req, res, next) => {
    try{

        const id = req.params.id

        const contrat = await Contrat.findOne({
            where: {id: id}
        })

        if(!contrat){
            console.log({message: "Désolé, aucun contrat trouvé dans la base de données!"})
            return res.status(400).json({message: "Désolé, aucun contrat trouvé dans la base de données!"})
        }

        const data = contrat

        console.log({message: "Contrat trouvé avec succès!", data})
        return res.status(200).json({message: "Contrat trouvé avec succès!", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}

exports.getContrats = async (req, res, next) => {
    try{

        const contrat = await Contrat.findAll()

         if(!contrat){
            console.log({message: "Désolé, aucun type de contrat trouvé dans la base de données!"})
            return res.status(400).json({message: "Désolé, aucun type de contrat trouvé dans la base de données!"})
        }

        const data = contrat

        console.log({message: "Voici la liste des contrats", data})
        return res.status(200).json({message: "Voici la liste des contrats", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}