const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Tache = db.define("Tache", {
    nom_tache: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Tache",
    timestamps: true
}

)

module.exports = Tache;