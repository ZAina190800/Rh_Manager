const express = require('express')
const Router = express.Router()
const CONTROLLERS = require("../controlles/index")

//Département
Router.post('/CreateDepartement', CONTROLLERS.CreateDepartement)

//Employé
Router.post('/signUp', CONTROLLERS.signUp)

module.exports = Router;