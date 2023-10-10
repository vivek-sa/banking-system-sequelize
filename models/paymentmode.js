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
      mode_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PaymentMode",
    }
  );
  return PaymentMode;
};
