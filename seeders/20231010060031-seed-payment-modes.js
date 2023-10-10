"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PaymentModes",
      [
        {
          mode_name: "Credit Card",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mode_name: "Debit Card",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mode_name: "Cheque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mode_name: "Cash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PaymentModes", null, {});
  },
};
