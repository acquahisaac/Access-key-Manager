'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password_resets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  password_resets.init({
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    created_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'password_resets',
  });
  return password_resets;
};