"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const branchesData = [
      {
        branch_name: "Main Branch",
        location: "Naya Gaon, Ratlam, MP",
        ifsc_code: "BAR46A2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        branch_name: "Downtown Branch",
        location: "456 Elm St, Udaipur, Rajasthan",
        ifsc_code: "DEF67890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        branch_name: "Uptown Branch",
        location: "789 Oak St, Jaipur, Rajasthan",
        ifsc_code: "GHI54321",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Branches", branchesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Branches", null, {});
  },
};
