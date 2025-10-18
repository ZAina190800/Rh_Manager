const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Departement = db.define("Departement", {
    
    nom_dept: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description_dept: {
        type: DataTypes.STRING,
        allowNull: false
    },

    localisation: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName:'Departement',
    timestamps: true,
})

module.exports = Departement;

