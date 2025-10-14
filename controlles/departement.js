const CreateError = require('../middlewares/error');
const Departement = require('../models/departement');

exports.CreateDepartement = async (req, res, next) => {
    try{

        //Déclarer les variables
        let {
            nom_dept,
            description_dept

        } = req.body;

        if(!nom_dept || !description_dept){
            return res.status(400).json({message: "Veuillez remplir tous les champs !"})
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