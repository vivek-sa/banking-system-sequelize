"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Employees", "position", {
      allowNull: false,
      type: Sequelize.ENUM("Manager", "Employee"),
      defaultValue: "Employee",
    });
    await queryInterface.changeColumn("Accounts", "account_type", {
      allowNull: false,
      type: Sequelize.ENUM("Savings", "Current", "Salary"),
      defaultValue: "Savings",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Employees", "position", {
      allowNull: false,
      type: Sequelize.ENUM("Manager", "Employee"),
    });
    await queryInterface.changeColumn("Accounts", "account_type", {
      allowNull: false,
      type: Sequelize.ENUM("Savings", "Current", "Salary"),
    });
  },
};
