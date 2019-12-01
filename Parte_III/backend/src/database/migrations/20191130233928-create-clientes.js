'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes',
      {
        CPF: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },

        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        endereco: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        cartao: {
          type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('clientes');
  }
};
