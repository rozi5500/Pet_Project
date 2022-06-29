'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laptop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laptop.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Laptop',
  });
  return Laptop;
};