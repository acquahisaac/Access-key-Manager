'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password_resets extends Model {
   
    static associate(models) {
      // define association here
      password_resets({
        email:{
          type:DataTypes.STRING,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
      })
    }
  }
  password_resets.init({
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    created_at: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'password_resets',
    tableName: 'password_resets',
    timestamps: false
  });
  return password_resets;
};