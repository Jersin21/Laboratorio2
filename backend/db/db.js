const { Sequelize } = require("sequelize");
require("dotenv").config();

// Option 1: Passing a connection URI
// Option 3: Passiotherng parameters separately ( dialects)
const bd = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

module.exports = bd;
