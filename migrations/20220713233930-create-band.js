'use strict';

const { sequelize } = require("../models");

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('bands', {
          band_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        available_start_time: {
          type: Sequelize.DATE,
          allowNull: false,
          defualtValue: sequelize.NOW
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: false,
          defualtValue: sequelize.NOW
        }
      })
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('bands')
    }
  }
  