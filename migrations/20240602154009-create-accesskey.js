'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accesskeys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      procured_at: {
        type: Sequelize.STRING
      },
      expires_at: {
        type: Sequelize.STRING
      },
      revoked_at: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accesskeys');
  }
};