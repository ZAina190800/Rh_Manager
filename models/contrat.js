const { DataTypes } = require("sequelize")
const db = require("../config/database")
const TypeContrat = require("./typecontrat")
const Employe = require("./employe")

const Contrat = db.define("Contrat", {
    nom_contrat: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status_contrat: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },

    date_debut_contrat: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin_contrat: {
        type: DataTypes.DATE,
        allowNull: false
    },

    ID_employe: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: Employe,
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

Contrat.belongsTo(Employe, {foreignKey: 'ID_employe', as: 'Employe'})
Contrat.belongsTo(TypeContrat, {foreignKey: 'ID_typec', as: 'TypeContrat'})

module.exports = Contrat;