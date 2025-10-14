const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Entreprise = require("./entreprise")
const Service = require("./service")
const Fonction = require("./fonction")

const Employé = db.define("Employé", {
    nom_employé: {
        type: DataTypes.STRING,
        allowNull: false
    },

    prénom_employé: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_naissance: {
        type: DataTypes.DATE,
        allowNull: false
    },

    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },

    adresse_employé: {
        type: DataTypes.STRING,
        allowNull: false
    },

    téléphone_employé: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email_employé: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

     password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_embauche: {
        type: DataTypes.DATE,
        allowNull: false
    },

    salaire: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ID_entreprise: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: Entreprise,
            key: 'id'
        }
    },

     ID_service: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: Service,
            key: 'id'
        }
    },

     ID_fonction: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references:{
            model: Fonction,
            key: 'id'
        }
    },
}, {
    tableName: "Employé",
    timestamps: true
})

Employé.belongsTo(Entreprise, {foreignKey: 'ID_entreprise', as: 'Entreprise'})

Employé.belongsTo(Service, {foreignKey: 'ID_service', as: 'Service'})

Employé.belongsTo(Fonction, {foreignKey: 'ID_fonction', as: 'Fonction'})

module.exports = Employé