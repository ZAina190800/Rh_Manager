const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Projet = require("./projet")
const Employé = require("./employe")

const Affecter = db.define("Affecter", {
    ID_projet: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Projet,
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
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    tableName: 'Affecter',
    timestamps: true
})

Affecter.belongsTo(Projet, {foreignKey: 'ID_projet', as:'Projet'})

Affecter.belongsTo(Employé, {foreignKey: 'ID_employé', as:'Employé'})

module.exports = Affecter;