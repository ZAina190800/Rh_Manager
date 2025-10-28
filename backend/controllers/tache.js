const validateInput = require("../js")
const CreateError = require("../middlewares/error")
const Tâche = require("../models/tache")

exports.CreateTache = async (req, res, next) => {
    try{

        let {nom_tache} = req.body

       const datas = {
        "nom": nom_tache
       }

       console.log(datas)

       for(const [key, value] of Object.entries(datas)){
        if(!validateInput(value)){
             console.log({message: `le champs ${key} ne doit pas être vide`})
             return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
        }
       }


        const tache = await Tâche.create({nom_tache })
        
        if(!tache){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: "la tâche a été créée avec succès !", tache})
        return res.status(400).json({message: "la tâche a été créée avec succès !", tache})

    }
    catch(error){
      next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
        
    }
}

exports.getTache = async (req, res, next) => {
    try{

        const id = req.params.id

        const tache = await Tâche.findOne({
            where: {id: id}
        })

        if(!tache){
            console.log({message: "Désolé, aucune tâche trouvée dans la base de données."})
            return res.status(400).json({message: "Désolé, aucune tâche trouvée dans la base de données"})
        }

        const data = tache
        
        console.log({message: "La tâche trouvée avec succès !", data})
        return res.status(200).json({message: "La tâche trouvée avec succès !", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}

exports.getTaches = async (req, res, next) => {
    try{

        const tache = await Tâche.findAll()

        if(!tache || tache.length === 0){
            console.log({message: "Désolé, aucune tâche trouvée"})
            return res.status(400).json({message: "Désolé, aucune tâche trouvée"})
        }

        const data = tache

        console.log({message: "Voici la liste des tâches", data})
        return res.status(200).json({message: "Voici la liste des tâches", data})

    }
    catch(error){     
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
    }
}