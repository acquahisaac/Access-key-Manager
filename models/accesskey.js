'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accesskey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  accesskey.init({
    id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    key: DataTypes.STRING,
    status: DataTypes.STRING,
    procured_at: DataTypes.STRING,
    expires_at: DataTypes.STRING,
    revoked_at: DataTypes.STRING,
    created_at: DataTypes.STRING,
    updated_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'accesskey',
  });
  return accesskey;
};