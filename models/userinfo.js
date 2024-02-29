const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const User = require("../models/user");
const UserInformation = sequelize.define("user_information", {
  name: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
User.hasOne(UserInformation);
UserInformation.belongsTo(User);
module.exports = UserInformation;
