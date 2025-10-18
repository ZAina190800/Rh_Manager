const express = require('express')
const Router = express.Router()
const CONTROLLERS = require("../controlles/index")
const upload = require('../middlewares/multer')

//Département
Router.post('/CreateDepartement', CONTROLLERS.CreateDepartement)
Router.get('/getDepartement', CONTROLLERS.getDepartement)

//Employé
Router.post('/signUp', CONTROLLERS.signUp)
Router.post('/signIn', CONTROLLERS.signIn)
Router.get('/getEntreprise', CONTROLLERS.getAllEntreprise)

//Entreprise
Router.post('/CreateEntreprise', upload.single('logo'), CONTROLLERS.CreateEntreprise)

//Tâche
Router.post('/CreateTache', CONTROLLERS.CreateTache)
Router.get('/getTache', CONTROLLERS.getTache)

//Service
Router.post("/CreateService", CONTROLLERS.CreateService)
Router.get("/getAllService", CONTROLLERS.getAllService)

//Fonction
Router.post("/CreateFunction", CONTROLLERS.CreateFunction)
Router.get("/getAllFunction", CONTROLLERS.getAllFunction)

module.exports = Router;