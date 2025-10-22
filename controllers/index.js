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

//TypeContrat
const {createTypeContrat, getTypeContrat} = require("./typecontrat")

//Contrat
const {CreateContrat, getContrat, getContrats} = require("./contrat")

//Service
const {CreateService, getAllService} = require("./service")

//Fonction
const {CreateFunction, getAllFunction} = require("./fonction")

const CONTROLLERS = {
    signUp, signIn, CreateDepartement, CreateTache, getDepartement, CreateEntreprise, getTache, getAllEntreprise, CreateService,
    getAllService, CreateFunction, getAllFunction, getEmploye, getEmployes, createTypeContrat, getTypeContrat, CreateContrat,
    getContrat, getContrats
}

module.exports = CONTROLLERS;