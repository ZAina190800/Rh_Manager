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

      } = req.body;

      const datas = {
        "nom": nom_employe,
        "prénom": prenom_employe,
        "date de naissance": date_naissance,
        "sexe": sexe,
        "adresse": adresse_employe,
        "téléphone": telephone_employe,
        "email": email_employe,
        "mot de passe": password,
        "date d'embauche": date_embauche,
        "salaire": salaire,
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
      
      //Créer la cookie
      res.cookie("acces-token", token, {
        httpOnly: true, 
        secure: false,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000

      })

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

    if(!employe){
      console.log({message: "Aucun compte trouvé avec cet email."})
      return res.status(404).json({message: "Aucun compte trouvé avec cet email."})
    }


    //Compare le mot de passe de l'employé
    const comparePassword = await bcrypt.compare(password, employe.password)

    if(!comparePassword){
      console.log({message: "Erreur, mot de passe incorrect"})
      return res.status(400).json({message: "Erreur, mot de passe incorrect"})
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

      return res.status(200).json({message: `Connexion réeussie, Bienvenue ${employe.nom_employe} ${employe.prenom_employe}`,
       token, employe})
     

  }
  catch(error){
    next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

  }
}

exports.getEmploye = async (req, res, next) => {
  try{


    const id = req.params.id

    const employe = await Employe.findOne({
      where: {id: id }
    })

    if(!employe || !employe.length === 0){
      console.log({message: "Aucun employé trouvé dans la base de données !"})
      return res.status(400).json({message: "Aucun employé trouvé dans la base de données !"})
    }

    console.log({message: "l'employé trouvé avec sucès!",employe})
    return res.status(200).json({message: "l'employé trouvé avec succès !", employe})

  }
  catch(error){
    next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))

  }
}

exports.getEmployes = async (req, res, next) => {
  try{

    const employe = await Employe.findAll()

    if(!employe || employe.length === 0 ){
      console.log({message: "Désolé, aucun employé trouvée, dans la base de données"})
      return res.status(400).json({message: "Désolé, aucun employé trouvée, dans la base de données"})

    }

    const data = employe

    console.log({message: "Voici la liste des employés", data})
     return res.status(200).json({message: "Voici la liste des employés", data})

  }
  catch(error){
   next(CreateError(500, "Erreur liée au serveur, veuillez contactez le service administratif pour plus d'information !", error.message))
  }
}