const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const Entreprise = require("../models/entreprise");

exports.CreateEntreprise = async (req, res, next) => {
    try{

        let {nom_entreprise,
            adresse_entreprise,
            email_entreprise,
            secteur_activité,
            date_création,
            téléphone_entreprise,
            ID_dept
        } = req.body;

         if(!req.file){
            console.log("Veuillez sélectionner le logo de l'entreprise ")
            return res.status(400).json({message: "Veuillez sélectionner le logo de l'entreprise"})
        }

        const logo = req.file ? req.file.name : ""
        
       const datas = {
        "nom": nom_entreprise,
        "adresse": adresse_entreprise,
        "email": email_entreprise,
        "secteur d'activité": secteur_activité,
        "date": date_création,
        "téléphone": téléphone_entreprise
       }

       console.log(datas)

        //Parcourir les champs afin de vérifier qu'ils ne soient pas vide
        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                console.log({message: `le champs ${key} ne doit pas être vide`})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }

        }
        
        const entreprise = await Entreprise.create({
            nom_entreprise, adresse_entreprise,email_entreprise, secteur_activité, date_création,logo,
            téléphone_entreprise: téléphone_entreprise ? `+242${téléphone_entreprise}` : "", ID_dept

        })

        if(!entreprise){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: `L'entreprise ${nom_entreprise} a été enregistrer avec succès !`})
        return res.status(200).json({message: `L'entreprise ${nom_entreprise} a été enregistrer avec succès !`})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}