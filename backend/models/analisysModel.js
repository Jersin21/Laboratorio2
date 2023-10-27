const { DataTypes } = require("sequelize");
const bd = require("../db/db");

const Solicitud = bd.define(
  "solicitud",
  {
    paciente: {
      type: DataTypes.STRING,
    },
    fecha: DataTypes.DATE,
    muestra: { type: DataTypes.STRING },
    observaciones: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "solicitud",
  }
);

module.exports = Solicitud;
