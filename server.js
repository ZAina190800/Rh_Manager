console.log("🚀 Démarage du serveur......")

//Importations
const express = require('express');
const app = express();
const ENV = require("./config")
const db = require('./config/database')
PORT = ENV.PORT || 8081
const Departement = require("./models/departement")
const Tâche = require("./models/tache")
const Fonction = require("./models/fonction")
const TypeContrat = require("./models/typecontrat")
const Congé = require("./models/conge")
const Mission = require("./models/mission")
const Projet = require("./models/projet")
const Service = require("./models/service")
const Entreprise = require("./models/entreprise")
const Employé = require("./models/employe")
const Contrat = require("./models/contrat")
const Prendre = require("./models/prendre")
const Affecter = require("./models/affecter")
const Exécuter = require("./models/execute")

//Middleware 
app.use(express.json())
   
//Middleware de la route
const loginUser = require("./router/route")

//Prefixe
app.use("/api", loginUser)


//Middlewares de gestion d'erreur
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Erreur lié au serveur !"
    const detail = err.detail || null

    res.status(status).json({error: {
        status,
        message,
        detail
    }})
})


const startServer = async () => {
    try{
        //Synchronisation des tables de la base de données 
        await db.sync({force : false})
        console.log("✅ La base de données est synchronisée!")

        app.listen(PORT, () => {
            console.log(`Le serveur tourne sur le http://localhost:${PORT}`)
        })


    }
    catch(error){
        console.error("❌ Erreur: La base de données n'est pas synchronisée!", error.message)
    }

}

startServer();