const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const ENV = require("../config/index")
const CreateError = require("../middlewares/error")
const Employé = require("../models/employe")

//Inscription du compte de l'employé
exports.signUp = async (req, res, next) => {
    try{

      //Déclarer les variables
      let {
        nom_employé,
        prénom_employé,
        date_naissance,
        sexe,
        adresse_employé,
        téléphone_employé,
        email_employé,
        password,
        date_embauche,
        salaire,
        ID_entreprise,
        ID_service,
        ID_fonction

      } = req.body

      //Vérifier que les champs ne sont pas vide
      if(!nom_employé || !prénom_employé || !email_employé || !password){

        return res.status(400).json({message: "Veuillez remplir tous les champs !"})
      }

      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10)

      //Créer les données
      const employé = await Employé.create({
        nom_employé,
        prénom_employé,
        date_naissance,
        sexe,
        adresse_employé,
        téléphone_employé,
        email_employé,
        password: hashedPassword,
        date_embauche,
        salaire,
        ID_entreprise: ID_entreprise || null,
        ID_service: ID_service || null,
        ID_fonction: ID_fonction || null

      })

      //Générer le token
      const token = await jwt.sign({id: employé.id}, ENV.TOKEN, {expiresIn: '24h'})

      //Création du cookie
      res.cookie("accès_token", token, {
        httpOnly: true, // impossible à lire depuis JS côté client
        secure: false,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
      })

      return res.status(200).json({message: "Inscription réussi", employé})

    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }

}