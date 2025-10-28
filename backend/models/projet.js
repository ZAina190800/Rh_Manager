const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Mission = require("./mission")

const Projet = db.define("Projet", {
    date_debut: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },

    cout: {
        type: DataTypes.STRING,
        allowNull: false
    },

     duree: {
        type: DataTypes.DATE,
        allowNull: false
    },

    ID_mission: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Mission,
            key: 'id'
        }
    }

}, {
    tableName: "Projet",
    timestamps: true
})

Projet.belongsTo(Mission, {foreignKey: 'ID_mission', as: 'Mission'})

module.exports = Projet;