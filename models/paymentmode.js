"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentMode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentMode.hasMany(models.Transaction, {
        foreignKey: "payment_mode_id",
      });
    }
  }
  PaymentMode.init(
    {
      mode_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "PaymentMode",
      tableName: "PaymentModes",
    }
  );
  return PaymentMode;
};
