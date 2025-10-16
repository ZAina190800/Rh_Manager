//Employé
const {
    signUp
} = require("./employe")

//Entreprise
const { CreateEntreprise, getAllEntreprise} = require("./entreprise")

//Département
const {
    CreateDepartement, getDepartement
} = require("./departement")

//Tâche
const {
    CreateTache, getTache
} = require("./tache")

//Service
const {CreateService, getAllService} = require("./service")

const CONTROLLERS = {
    signUp, CreateDepartement, CreateTache, getDepartement, CreateEntreprise, getTache, getAllEntreprise, CreateService,
    getAllService
}

module.exports = CONTROLLERS;