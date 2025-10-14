// Importations
const dotenv = require('dotenv');
dotenv.config();

// Déclaration de la variable ENV avec des objets
const ENV = {
    PORT: process.env.PORT,
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    DIALECT: process.env.DIALECT,
    TOKEN: process.env.TOKEN,
    PORT_DATABASE: process.env.PORT_DATABASE
}

module.exports = ENV;