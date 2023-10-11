"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Transactions", "unique_id", {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.literal("uuid_generate_v4()"),
    });

    await queryInterface.removeConstraint("Transactions", "Transactions_pkey");

    await queryInterface.addConstraint("Transactions", {
      type: "primary key",
      fields: ["unique_id"],
      name: "Transactions_pkey",
    });

    await queryInterface.removeColumn("Transactions", "id");

    await queryInterface.renameColumn("Transactions", "unique_id", "id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Transactions", "id", "unique_id");

    await queryInterface.addColumn("Transactions", "id", {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    });

    await queryInterface.removeConstraint("Transactions", "Transactions_pkey");

    await queryInterface.addConstraint("Transactions", {
      type: "primary key",
      fields: ["id"],
      name: "Transactions_pkey",
    });

    await queryInterface.removeColumn("Transactions", "unique_id");
  },
};
