const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Fonction = db.define("Fonction", {
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    salaire_maximum: {
        type: DataTypes.STRING,
        allowNull: false
    },

    salaire_minimum: {
        type: DataTypes.STRING,
        allowNull: false
    },


}, {
    tableName: "Fonction",
    timestamps: true
})

module.exports = Fonction;