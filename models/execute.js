const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Tâche = require("./tache")
const Employé = require("./employe")

const Exécuter = db.define("Exécuter", {
    ID_tâche: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Tâche,
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

    période: {
        type: DataTypes.STRING,
        allowNull: false,

    },


}, {
    tableName: 'Exécuter',
    timestamps: true
})

Exécuter.belongsTo(Tâche, {foreignKey: 'ID_tâche', as: 'Tâche'})
Exécuter.belongsTo(Employé, {foreignKey: 'ID_employé', as: 'Employé'})

module.exports = Exécuter;