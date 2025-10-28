const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Mission = db.define("Mission", {
    nom_mission: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Mission",
    timestamps: true
})

module.exports = Mission