const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const Fonction = require("../models/fonction");

exports.CreateFunction = async (req, res, next) => {
    try{

        let {titre, salaire_maximum, salaire_minimum} = req.body;

        const datas = {
            "titre": titre,
            "salaire_maximum": salaire_maximum,
            "salaire_minimun": salaire_minimum
        }

        console.log(datas)

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const fonction = await Fonction.create({
            titre, salaire_maximum, salaire_minimum
        })

        if(!fonction){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "La fonction a été enregistrée avec succès !", fonction})
        return res.status(200).json({message: "La fonction a été enregistrée avec succès !", fonction})

    }
    catch(error){
        next(CreateError(500,"Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getAllFunction = async (req, res, next) => {
    try{
        const fonction = await Fonction.findAll()

        if(!fonction || fonction.length === 0){
            console.log({message: "Désolé, aucune fonction trouvée"})
            return res.status(400).json({message: "Désolé, aucune fonction trouvée"})
        }

        console.log({message: "Voici la liste des fonctions", fonction})
        return res.status(200).json({message: "Voici la liste des fonctions", fonction})

    }
    catch(error){
        next(CreateError(500,"Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}