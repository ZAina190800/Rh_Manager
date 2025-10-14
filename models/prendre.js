const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Congé = require("./conge")
const Employé = require("./employe")

const Prendre = db.define('Prendre', {
    ID_congé: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Congé,
            key: 'id'
        }
    },

    ID_employé: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Employé,
            key: 'id'
        }
    }
}, {
    tableName: 'Prendre',
    timestamps: true
})

Prendre.belongsTo(Congé, {foreignKey: 'ID_congé', as: 'Congé'})
Prendre.belongsTo(Employé, {foreignKey: 'ID_employé', as: 'Employé'})

module.exports = Prendre;