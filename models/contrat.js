const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Employé = require("./employe")
const TypeContrat = require("./typecontrat")

const Contrat = db.define("Contrat", {
    nom_contrat: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status_contrat: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },

    date_début_contrat: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin_contrat: {
        type: DataTypes.DATE,
        allowNull: false
    },

    ID_employé: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: Employé,
            key: 'id'
        }
    },

    ID_typec: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: TypeContrat,
            key: 'id'
        }
    },
}, {
    tableName: "Contrat",
    timestamps: true
})

Contrat.belongsTo(Employé, {foreignKey: 'ID_employé', as: 'Employé'})
Contrat.belongsTo(TypeContrat, {foreignKey: 'ID_typec', as: 'TypeContrat'})

module.exports = Contrat;