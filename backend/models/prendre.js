const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Employe = require("./employe")
const Conge = require("./conge")

const Prendre = db.define('Prendre', {
    ID_conge: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Conge,
            key: 'id'
        }
    },

    ID_employe: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Employe,
            key: 'id'
        }
    }
}, {
    tableName: 'Prendre',
    timestamps: true
})

Prendre.belongsTo(Conge, {foreignKey: 'ID_conge', as: 'Conge'})
Prendre.belongsTo(Employe, {foreignKey: 'ID_employe', as: 'Employe'})

module.exports = Prendre;