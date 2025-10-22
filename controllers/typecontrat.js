const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const TypeContrat = require("../models/typecontrat");

exports.createTypeContrat = async (req, res, next) => {
    try{

        let {nom_typec, description_typec} = req.body;

        const datas = {
            "nom": nom_typec,
            "description": description_typec
        }

        console.log(datas)

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(validateInput)){
                console.log({message: `le champs ${key} ne doit pas être vide`})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const typec = await TypeContrat.create({
            nom_typec, description_typec
        })

        if(!typec){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})
            
            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )

        }

        console.log({message: " La tâche a été créer avec succès!", typec})
        return res.status(200).json({message: " La tâche a été créer avec succès!", typec})

    }catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getTypeContrat = async (req,res, next) => {
    try{

        const typec = await TypeContrat.findAll()

        if(!typec){
            console.log({message: "Désolé, aucun type de contrat trouvé dans la base de données!"})
            return res.status(400).json({message: "Désolé, aucun type de contrat trouvé dans la base de données!"})
        }

        const data = typec

        console.log({message: "Voici la liste des types de contrats", data})
        return res.status(200).json({message: "Voici la liste des types de contrats", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}