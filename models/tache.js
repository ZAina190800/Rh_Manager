const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Tâche = db.define("Tâche", {
    nom_tâche: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Tâche",
    timestamps: true
}

)

module.exports = Tâche;