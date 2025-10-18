// Importations
const dotenv = require('dotenv');
dotenv.config();

// Déclaration de la variable ENV avec des objets
const ENV = {
    PORT: process.env.PORT,
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD || "",
    DATABASE: process.env.DATABASE,
    DIALECT: "mysql",
    TOKEN: process.env.TOKEN || "ma_clé_secret",
    PORT_DATABASE: process.env.PORT_DATABASE
}

module.exports = ENV;