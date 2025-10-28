const { DataTypes } = require("sequelize")
const db = require("../config/database")
const Departement = require("./departement")

const Service = db.define("Service", {
    nom_service: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ID_dept: {
        type: DataTypes.INTEGER,
        allowNull: true,

        references: {
            model: Departement,
            key:'id'
        }
    }
}, {
    tableName: "Service",
    timestamps: true
})

Service.belongsTo(Departement, {foreignKey: 'ID_dept', as: "Departement"})

module.exports = Service;