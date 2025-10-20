const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const ENV = require("../config/index")
const CreateError = require("../middlewares/error")
const validateInput = require("../js")
const Employe = require("../models/employe")

//Inscription du compte de l'employé
exports.signUp = async (req, res, next) => {
    try{

      //Déclarer les variables
      let {
        nom_employe,
        prenom_employe,
        date_naissance,
        sexe,
        adresse_employe,
        telephone_employe,
        email_employe,
        password,
        date_embauche,
        salaire,
        ID_entreprise,
        ID_service,
        ID_fonction

      } = req.body

      const datas = {
        "Nom": nom_employe,
        "Prénom": prenom_employe,
        "Date de naissance": date_naissance,
        "Sexe": sexe,
        "Adresse": adresse_employe,
        "Téléphone": telephone_employe,
        "Email": email_employe,
        "Mot de passe": password,
        "Date d'embauche": date_embauche,
        "Salaire": salaire,
      }

      console.log(datas)

      for(const [key, value] of Object.entries(datas)){
        if(!validateInput(value)){
           if(!validateInput(value)){
                return res.status(400).json({message: `le champs ${key} ne doit pas être vide`})
            }
        }
      }
      

      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10)

      //Créer les données
      const employe = await Employe.create({
        nom_employe,
        prenom_employe,
        date_naissance,
        sexe,
        adresse_employe,
        telephone_employe,
        email_employe,
        password: hashedPassword,
        date_embauche,
        salaire,
        ID_entreprise: ID_entreprise || null,
        ID_service: ID_service || null,
        ID_fonction: ID_fonction || null

      })

      //Générer le token
      const token = await jwt.sign({id: employe.id}, ENV.TOKEN, {expiresIn: '24h'})

      console.log({message: "Inscription réussi", token, employe})
      return res.status(200).json({message: "Inscription réussi", token, employe})

    }
    catch(error){
        next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

    }

}

exports.signIn = async (req, res, next) => {
  try{

    let {
        email_employe,
        password,
        } = req.body;

        if(!email_employe || !password){
          return res.status(400).json({message: "l'email et le mot de passe sont requis !"})
        }

    //Trouver l'employé par l'email
    const employe = await Employe.findOne({
      where: {email_employe}
    })


    //Compare le mot de passe de l'employé
    const comparePassword = await bcrypt.compare(password, employe.password)

    if(!comparePassword){
      console.log({message: "Erreur, le mot de passe n'existe pas"})
      return res.status(400).json({message: "Erreur, le mot de passe n'existe pas"})
    }

    //Récupère le token
    const token = await jwt.sign({id: employe.id}, ENV.TOKEN, {expiresIn: "24h"})

    //Création de ma cookie
    res.cookie("accès_token", token, {
        httpOnly: true, // impossible à lire depuis JS côté client
        secure: false,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // en milliseconde
      })

      return res.status(200).json({message: `Connexion réeussie, Bienvenue ${employe.nom_employe} ${employe.prenom_employe}`, token, 
        employe: {
          nom_employe: employe.nom_employe,
          prenom_employe: employe.prenom_employe,
          date_naissance: employe.date_naissance,
          sexe: employe.sexe,
          adresse_employe: employe.adresse_employe,
          telephone_employe: employe.telephone_employe,
          email_employe: employe.email_employe,
          date_embauche: employe.date_embauche,
          salaire: employe.salaire

        }})
     

  }
  catch(error){
     next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

  }
}