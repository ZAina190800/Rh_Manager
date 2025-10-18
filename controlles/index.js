//Employé
const {
    signUp, signIn
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

//Fonction
const {CreateFunction, getAllFunction} = require("./fonction")

const CONTROLLERS = {
    signUp, CreateDepartement, CreateTache, getDepartement, CreateEntreprise, getTache, getAllEntreprise, CreateService,
    getAllService, CreateFunction, getAllFunction, signIn
}

module.exports = CONTROLLERS;