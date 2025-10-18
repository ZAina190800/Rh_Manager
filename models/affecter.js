const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Projet = require("./projet")
const Employe = require("./employe")

const Affecter = db.define("Affecter", {
    ID_projet: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Projet,
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

Affecter.belongsTo(Employe, {foreignKey: 'ID_employe', as:'Employe'})

module.exports = Affecter;