const express = require('express')
const Router = express.Router()
const CONTROLLERS = require("../controlles/index")

//Département
Router.post('/CreateDepartement', CONTROLLERS.CreateDepartement)
Router.get('/getDepartement', CONTROLLERS.getDepartement)

//Employé
Router.post('/signUp', CONTROLLERS.signUp)

//Entreprise
Router.post('/CreateEntreprise', CONTROLLERS.CreateEntreprise)

//Tâche
Router.post('/CreateTache', CONTROLLERS.CreateTache)

module.exports = Router;