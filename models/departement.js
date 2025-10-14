const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Departement = db.define("Département", {
    
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
    tableName:'Département',
    timestamps: true,
})

module.exports = Departement;

