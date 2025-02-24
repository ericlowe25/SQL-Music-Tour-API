'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('Events', {
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async(queryInterface, Sequelize) =>{
    await queryInterface.dropTable('Events')
  }
}