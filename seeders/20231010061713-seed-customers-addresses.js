"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CustomerAddresses",
      [
        {
          customer_id: 3,
          address_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 4,
          address_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 5,
          address_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CustomerAddresses", null, {});
  },
};
