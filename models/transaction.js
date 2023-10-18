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
      account_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      payment_mode_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      transaction_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transaction_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Transaction",
      tableName: "Transactions",
    }
  );
  return Transaction;
};
