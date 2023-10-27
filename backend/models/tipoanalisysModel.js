const { DataTypes } = require("sequelize");
const bd = require("../db/db");

const Analisys = bd.define(
  "analisis",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: "analisis",
  }
);

module.exports = Analisys;
