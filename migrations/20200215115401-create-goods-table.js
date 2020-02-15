'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('goods',{
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    shop_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    thumb_url: Sequelize.STRING,
    create_at: Sequelize.DATE,
    updated: Sequelize.DATE,
  }),

  down: queryInterface => queryInterface.dropTable('goods')
};
