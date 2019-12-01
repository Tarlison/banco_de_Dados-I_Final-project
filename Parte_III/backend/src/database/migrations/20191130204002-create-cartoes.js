'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cartoes',
      {
        numero: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },

        proprietario: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        data_de_validade: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        situacao: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cartoes');
  }
};
