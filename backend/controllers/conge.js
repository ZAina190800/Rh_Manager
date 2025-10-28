const CreateError = require("../middlewares/error")
const validateInput = require("../js")
const Conge = require("../models/conge")

exports.CreateConge = async (req, res, next) => {
    try{
        let {date_debut_conge, date_fin_conge } = req.body;

        const datas = {
            "date de début": date_debut_conge,
            "date de fin":  date_fin_conge
        }

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
              console.log({message: `le champs ${key} ne doit pas être vide`})
              return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const conge = await Conge.create({
            date_debut_conge, date_fin_conge
        })

        if(!conge){
             console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "Le congé a été enregistrer avec succès !", conge})
        return res.status(200).json({message: "Le conge a été enregistrer avec succès !", conge})

    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getConges = async (req, res, next) => {
    try{

        const conge = await Conge.findAll()

        if(!conge || conge.length === 0){
            console.log({message: "Désolé, aucun congé trouvé"})
            return res.status(400).json({message: "Désolé, aucun congé trouvé"})
        }

        const data = conge

        console.log({message: "Voici la liste des congés", data})
        return res.status(200).json({message: "Voici la liste des congés", data})

    }
    catch(error){
      next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}