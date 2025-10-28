const express = require('express')
const Router = express.Router()
const CONTROLLERS = require("../controllers/index")
const upload = require('../middlewares/multer')

//Département
Router.post('/CreateDepartement', CONTROLLERS.CreateDepartement)
Router.get('/getDepartement', CONTROLLERS.getDepartement)

//Employé
Router.post('/signUp', CONTROLLERS.signUp)
Router.post('/signIn', CONTROLLERS.signIn)
Router.get('/getEmploye/:id', CONTROLLERS.getEmploye)
Router.get('/getEmployes', CONTROLLERS.getEmployes)

//Entreprise
Router.post('/CreateEntreprise', upload.single('logo'), CONTROLLERS.CreateEntreprise)
Router.get('/getEntreprise', CONTROLLERS.getAllEntreprise)

//Tâche
Router.post('/CreateTache', CONTROLLERS.CreateTache)
Router.get('/getTache/:id', CONTROLLERS.getTache)
Router.get('/getTaches', CONTROLLERS.getTaches)

//TypeContrat
Router.post('/createTypeContrat', CONTROLLERS.createTypeContrat)
Router.get('/getTypeContrat', CONTROLLERS.getTypeContrat)

//Contrat
Router.post('/CreateContrat', CONTROLLERS.CreateContrat)
Router.get('/getContrat/:id', CONTROLLERS.getContrat)
Router.get('/getContrats', CONTROLLERS.getContrats)

//Service
Router.post("/CreateService", CONTROLLERS.CreateService)
Router.get("/getAllService", CONTROLLERS.getAllService)

//Fonction
Router.post("/CreateFunction", CONTROLLERS.CreateFunction)
Router.get("/getAllFunction", CONTROLLERS.getAllFunction)
Router.get("/getFunction/:id", CONTROLLERS.getFunction)

//Mission 
Router.post("/CreateMission", CONTROLLERS.CreateMission)
Router.get("/getMissions", CONTROLLERS.getMissions)

//Projet
Router.post("/CreateProjet", CONTROLLERS.CreateProjet)
Router.get("/getProjets", CONTROLLERS.getProjets)

//Conge
Router.post('/CreateConge', CONTROLLERS.CreateConge)
Router.get('/getConges', CONTROLLERS.getConges)

module.exports = Router;