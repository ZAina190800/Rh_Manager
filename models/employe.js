const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Entreprise = require("./entreprise")
const Service = require("./service")
const Fonction = require("./fonction")

const Employe = db.define("Employe", {
    nom_employe: {
        type: DataTypes.STRING,
        allowNull: false
    },

    prenom_employe: {
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

    adresse_employe: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone_employe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email_employe: {
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
    tableName: "Employe",
    timestamps: true
})

Employe.belongsTo(Entreprise, {foreignKey: 'ID_entreprise', as: 'Entreprise'})

Employe.belongsTo(Service, {foreignKey: 'ID_service', as: 'Service'})

Employe.belongsTo(Fonction, {foreignKey: 'ID_fonction', as: 'Fonction'})

module.exports = Employe