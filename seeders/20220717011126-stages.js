'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>  {
     await queryInterface.bulkInsert('stages', [{
        stage_name: 'ONE',
     },{
      stage_name: 'TWO',
     },{
      stage_name: 'THREE',
     }])
    },
  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('stages', null, {});
     
  }
};