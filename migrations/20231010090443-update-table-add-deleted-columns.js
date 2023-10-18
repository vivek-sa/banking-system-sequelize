"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Accounts", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("Addresses", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("Branches", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("Customers", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("CustomerAddresses", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("Employees", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("PaymentModes", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
    await queryInterface.addColumn("Transactions", "deleted_at", {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Accounts", "deleted_at");
    await queryInterface.removeColumn("Addresses", "deleted_at");
    await queryInterface.removeColumn("Branches", "deleted_at");
    await queryInterface.removeColumn("Customers", "deleted_at");
    await queryInterface.removeColumn("CustomerAddresses", "deleted_at");
    await queryInterface.removeColumn("Employees", "deleted_at");
    await queryInterface.removeColumn("PaymentModes", "deleted_at");
    await queryInterface.removeColumn("Transactions", "deleted_at");
  },
};
