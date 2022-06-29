const { DataTypes } = require('sequelize');

const sequelize = require('../db')

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  })

module.exports = User