const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Departement = require("./departement")

const Entreprise = db.define("Entreprise", {
    nom_entreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },

        adresse_entreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },

        email_entreprise: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

        secteur_activité: {
        type: DataTypes.STRING,
        allowNull: false
    },

        localisation: {
        type: DataTypes.STRING,
        allowNull: true
    },

        date_création: {
        type: DataTypes.DATE,
        allowNull: false
    },

        logo: {
        type: DataTypes.STRING,
        allowNull: false
    },

        téléphone_entreprise: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    ID_dept: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Departement,
            key: 'id'
        }

    }

}, {
    tableName: "Entreprise",
    timestamps: true
})

Entreprise.belongsTo(Departement, {foreignKey: 'ID_dept', as: "Departement"})

module.exports = Entreprise;