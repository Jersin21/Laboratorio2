const { DataTypes } = require("sequelize");
const bd = require("../db/db");

const Solicitud = bd.define(
  "solicitud",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    paciente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    muestra: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    idUsuarioMedico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    idUsuarioLab: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "solicitud",
  }
);

module.exports = Solicitud;
