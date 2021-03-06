'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncremet: true,
          allowNull: false,
        },

        nome: {
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
    return queryInterface.dropTable('categorias');
  }
};
