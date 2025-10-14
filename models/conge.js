const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Congé = db.define("Congé", {
    status_congé: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },

    date_début_congé: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin_congé: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "Congé",
    timestamps: true
})

module.exports = Congé