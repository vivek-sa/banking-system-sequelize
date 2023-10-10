"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addressesData = [
      {
        street_address: "123 Main St",
        city: "Udaipur",
        state: "Rajasthan",
        zip_code: "304930",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street_address: "456 Elm St",
        city: "Jaipur",
        state: "Rajasthan",
        zip_code: "303920",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street_address: "789 Oak St",
        city: "Indore",
        state: "MP",
        zip_code: "483232",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Addresses", addressesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
