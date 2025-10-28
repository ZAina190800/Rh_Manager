const CreateError = require("../middlewares/error")
const validateInput = require("../js")
const Projet = require("../models/projet")

exports.CreateProjet = async (req, res, next) => {
    try{
        let {date_debut, date_fin, cout, duree, ID_mission} = req.body;

         const datas = {
            "date de début": date_debut,
            "date de fin":  date_fin,
            "coût": cout, 
            "durée": duree
        }

        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
              console.log({message: `le champs ${key} ne doit pas être vide`})
              return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }

        const projet = await Projet.create({
            date_debut, 
            date_fin, 
            cout, 
            duree, 
            ID_mission: ID_mission ? parseInt(ID_mission) : null

        })

         if(!projet){
             console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "Le projet a été enregistrer avec succès !", projet})
        return res.status(200).json({message: "Le projet a été enregistrer avec succès !", projet})

    }catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}

exports.getProjets = async (req, res, next) => {
    try{

        const projet = await Projet.findAll()

        if(!projet || projet.length === 0){
             console.log({message: "Désolé, aucun projet trouvé"})
            return res.status(400).json({message: "Désolé, aucun projet trouvé"})
        }

        const data = projet

        console.log({message: "Voici la liste des projets", data})
        return res.status(200).json({message: "Voici la liste des projets", data})

    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}