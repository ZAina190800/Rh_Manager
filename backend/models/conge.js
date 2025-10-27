const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Conge = db.define("Conge", {
    status_conge: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },

    date_debut_conge: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin_conge: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "Conge",
    timestamps: true
})

module.exports = Conge