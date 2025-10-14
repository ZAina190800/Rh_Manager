const { Sequelize } = require('sequelize')
const ENV = require("./index")

console.log("🚀 Initialisation de connexion à MySQL......")

const db = new Sequelize(ENV.DATABASE, ENV.USER, ENV.PASSWORD, {
    host: ENV.HOST,
    dialect: "mysql",
    port: ENV.PORT_DATABASE,
    logging: false
})

const connexion = async () => {
    try{
        console.log("🚀 tantative de connexion à MySQL")
        await db.authenticate();
        console.log("✅ Connexion à la base de données réussi avec succès!")

    }
    catch(error){
        console.error("❌ Erreur de connexion à la base de données")
    }
}

connexion();
module.exports = db;