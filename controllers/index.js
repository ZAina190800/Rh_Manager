//Employé
const {
   signIn, signUp, getEmploye, getEmployes
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
    signUp, signIn, CreateDepartement, CreateTache, getDepartement, CreateEntreprise, getTache, getAllEntreprise, CreateService,
    getAllService, CreateFunction, getAllFunction, getEmploye, getEmployes
}

module.exports = CONTROLLERS;