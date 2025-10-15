//Employé
const {
    signUp
} = require("./employe")

//Entreprise
const { CreateEntreprise} = require("./entreprise")

//Département
const {
    CreateDepartement, getDepartement
} = require("./departement")

//Tâche
const {
    CreateTache
} = require("./tache")

const CONTROLLERS = {
    signUp, CreateDepartement, CreateTache, getDepartement, CreateEntreprise
}

module.exports = CONTROLLERS;