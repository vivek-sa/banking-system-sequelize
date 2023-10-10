"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Accounts", "createdAt", "created_at");
    await queryInterface.renameColumn("Accounts", "updatedAt", "updated_at");
    await queryInterface.renameColumn("Addresses", "createdAt", "created_at");
    await queryInterface.renameColumn("Addresses", "updatedAt", "updated_at");
    await queryInterface.renameColumn("Branches", "createdAt", "created_at");
    await queryInterface.renameColumn("Branches", "updatedAt", "updated_at");
    await queryInterface.renameColumn("Customers", "createdAt", "created_at");
    await queryInterface.renameColumn("Customers", "updatedAt", "updated_at");
    await queryInterface.renameColumn(
      "CustomerAddresses",
      "createdAt",
      "created_at"
    );
    await queryInterface.renameColumn(
      "CustomerAddresses",
      "updatedAt",
      "updated_at"
    );
    await queryInterface.renameColumn("Employees", "createdAt", "created_at");
    await queryInterface.renameColumn("Employees", "updatedAt", "updated_at");
    await queryInterface.renameColumn(
      "PaymentModes",
      "createdAt",
      "created_at"
    );
    await queryInterface.renameColumn(
      "PaymentModes",
      "updatedAt",
      "updated_at"
    );
    await queryInterface.renameColumn(
      "Transactions",
      "createdAt",
      "created_at"
    );
    await queryInterface.renameColumn(
      "Transactions",
      "updatedAt",
      "updated_at"
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Accounts", "created_at", "createdAt");
    await queryInterface.renameColumn("Accounts", "updated_at", "updatedAt");
    await queryInterface.renameColumn("Addresses", "created_at", "createdAt");
    await queryInterface.renameColumn("Addresses", "updated_at", "updatedAt");
    await queryInterface.renameColumn("Branches", "created_at", "createdAt");
    await queryInterface.renameColumn("Branches", "updated_at", "updatedAt");
    await queryInterface.renameColumn("Customers", "created_at", "createdAt");
    await queryInterface.renameColumn("Customers", "updated_at", "updatedAt");
    await queryInterface.renameColumn(
      "CustomerAddresses",
      "created_at",
      "createdAt"
    );
    await queryInterface.renameColumn(
      "CustomerAddresses",
      "updated_at",
      "updatedAt"
    );
    await queryInterface.renameColumn("Employees", "created_at", "createdAt");
    await queryInterface.renameColumn("Employees", "updated_at", "updatedAt");
    await queryInterface.renameColumn(
      "PaymentModes",
      "created_at",
      "createdAt"
    );
    await queryInterface.renameColumn(
      "PaymentModes",
      "updated_at",
      "updatedAt"
    );
    await queryInterface.renameColumn(
      "Transactions",
      "created_at",
      "createdAt"
    );
    await queryInterface.renameColumn(
      "Transactions",
      "updated_at",
      "updatedAt"
    );
  },
};
