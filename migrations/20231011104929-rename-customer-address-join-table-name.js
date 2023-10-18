"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable("CustomerAddresses", "CustomersAddresses");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable("CustomersAddresses", "CustomerAddresses");
  },
};
