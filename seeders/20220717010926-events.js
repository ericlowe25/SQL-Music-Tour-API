'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>  {
     await queryInterface.bulkInsert('events', [{
        name: 'John Doe',
        date: '2022-01-11',
        start_time: '2022-01-11T03:33:12.000Z',
        end_time: '2022-01-11T04:33:12.000Z'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('events', null, {});
     
  }
};
