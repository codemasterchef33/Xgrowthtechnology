const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
});

module.exports = User;
