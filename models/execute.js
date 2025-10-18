const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Employe = require("./employe")
const Tache = require("./tache")

const Executer = db.define("Executer", {
    ID_tache: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Tache,
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

    periode: {
        type: DataTypes.STRING,
        allowNull: false,

    },


}, {
    tableName: 'Executer',
    timestamps: true
})

Executer.belongsTo(Tache, {foreignKey: 'ID_tache', as: 'Tache'})
Executer.belongsTo(Employe, {foreignKey: 'ID_employe', as: 'Employe'})

module.exports = Executer;