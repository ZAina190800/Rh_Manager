const { DataTypes } = require("sequelize")
const db = require("../config/database")

const TypeContrat = db.define("TypeContrat", {
    nom_typec: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description_typec: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "TypeContrat",
    timestamps: true
})

module.exports = TypeContrat;