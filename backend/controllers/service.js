const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const Service = require("../models/service");

exports.CreateService = async (req, res, next) => {
    try{

        let {nom_service, Id_dept} = req.body;

        const datas = {
            "nom": nom_service
        }

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const service = await Service.create({
            nom_service, Id_dept
        })

        if(!service){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "Le service a été enregistrer avec succès !", service})
        return res.status(200).json({message: "Le service a été enregistrer avec succès !", service})

    }
    catch(error){
        next(CreateError(500,"Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getAllService = async (req, res, next) => {
    try{

        const service = await Service.findAll()

        if(!service || service.length === 0){
            console.log({message: "Désolé, aucun service trouvé"})
            return res.status(400).json({message: "Désolé, aucun service trouvé"})
        }

        const data = service

        console.log({message: "Voici la liste des services", data})
        return res.status(200).json({message: "Voici la liste des services", data})

    }
    catch(error){
     next(CreateError(500,"Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}