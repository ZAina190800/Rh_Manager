const CreateError = require("../middlewares/error")
const validateInput = require("../js")
const Mission = require("../models/mission")

exports.CreateMission = async (req, res, next) => {
    try{

        let {nom_mission, description} = req.body;

        const datas = {
            "nom": nom_mission,
            "description": description
        }

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                console.log({message: `le champs ${key} ne doit pas être vide `})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const mission = await Mission.create({
            nom_mission, description
        })

        if(!mission){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "La mission a été enregistrer avec succès !", mission})
        return res.status(200).json({message: "La mission a été enregistrer avec succès !", mission})
        
    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getMissions = async (req, res, next) => {
    try{
        const mission = await Mission.findAll()

        if(!mission || mission.length === 0){
            console.log({message: "Désolé, aucune mission trouvée, dans la base de données"})
            return res.status(400).json({message: "Désolé, aucune mission trouvée, dans la base de données"})

        }

         const data = mission

          console.log({message: "Voici la liste des missions", data})
          return res.status(200).json({message: "Voici la liste des missions", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}