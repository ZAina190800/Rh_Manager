const validateInput = require('../js');
const CreateError = require('../middlewares/error');
const Departement = require('../models/departement');

exports.CreateDepartement = async (req, res, next) => {
    try{

        //Déclarer les variables
        let {
            nom_dept,
            description_dept

        } = req.body;

        const datas = {
            "nom": nom_dept,
            "description": description_dept
        }

        console.log(datas)
        
        //Parcourir les champs afin de vérifier qu'ils ne soient pas vide
        for(const [key, value] of Object.entries(datas)){
            if(!validateInput(value)){
                 console.log({message: `le champs ${key} ne doit pas être vide`})
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }


        const departement = await Departement.create({
            nom_dept,
            description_dept
        })

        return res.status(200).json({message: "Département créer avec succès !", departement})

    }
    catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
        
    }
} 

exports.getDepartement = async (req, res, next) => {
    try{
        const departement = await Departement.findAll()

        if(!departement || departement.length === 0){
            console.log({message: "Aucun département trouvé."})
            return res.status(400).json({message: "Aucun département trouvé."})
        }

        console.log({message: "Voici la liste des départements !", departement})
        return res.status(200).json({message: "Voici la liste des départements  !", departement})

    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }
}