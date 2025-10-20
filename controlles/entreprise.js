const validateInput = require("../js");
const CreateError = require("../middlewares/error");
const Entreprise = require("../models/entreprise");

exports.CreateEntreprise = async (req, res, next) => {
    try{

        let {nom_entreprise,
            adresse_entreprise,
            email_entreprise,
            secteur_activite,
            date_creation,
            telephone_entreprise,
            ID_dept
        } = req.body;

        const logo = req.file ? req.file.filename : ""
        
       const datas = {
        "nom": nom_entreprise,
        "adresse": adresse_entreprise,
        "email": email_entreprise,
        "secteur d'activité": secteur_activite,
        "date": date_creation,
        "logo": logo,
        "téléphone": telephone_entreprise
       }

       console.log(datas)

        //Parcourir les champs afin de vérifier qu'ils ne soient pas vide
        for(const [key, value] of Object.entries(datas)){
            if(key === "logo") continue
            if(!validateInput(value)){
                console.log({message: `le champs ${key} ne doit pas être vide`})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }

        }
        
        const entreprise = await Entreprise.create({
            nom_entreprise, adresse_entreprise,email_entreprise, secteur_activite, date_creation,logo,
            telephone_entreprise: telephone_entreprise ? `+242${telephone_entreprise}` : "", ID_dept

        })
        

        if(!entreprise){
            console.log({message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"})

            return res.status(400).json(
                {message: "Une erreur est survenue lors de l'exécusion de l'opération, contactez le service d'administration pour plus d'information!"}
            )
        }

        console.log({message: `L'entreprise ${nom_entreprise} a été enregistrer avec succès !`, entreprise})
        return res.status(200).json({message: `L'entreprise ${nom_entreprise} a été enregistrer avec succès !`,entreprise})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}

exports.getAllEntreprise = async (req, res, next) => {
    try{

        const entreprise = await Entreprise.findAll()

        if(!entreprise || entreprise.length === 0){
            console.log({message: "Désolé, aucune entreprise trouvée"})
            return res.status(400).json({message: "Désolé, aucune entreprise trouvée"})
        }

        const data = entreprise

        console.log({message: "Voici la liste des entreprises", data})
        return res.status(200).json({message: "Voici la liste des entreprises", data})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }


}