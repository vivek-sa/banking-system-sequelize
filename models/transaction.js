"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Account, {
        foreignKey: "account_id",
      });
      Transaction.belongsTo(models.PaymentMode, {
        foreignKey: "payment_mode_id",
      });
    }
  }
  Transaction.init(
    {
      account_id: DataTypes.INTEGER,
      payment_mode_id: DataTypes.INTEGER,
      transaction_date: DataTypes.DATE,
      transaction_type: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      modelName: "Transaction",
      tableName: "Transactions",
    }
  );
  return Transaction;
};
