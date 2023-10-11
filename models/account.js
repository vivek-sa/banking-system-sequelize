"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.Customer, {
        foreignKey: "customer_id",
      });
      Account.belongsTo(models.Branch, {
        foreignKey: "branch_id",
      });
      Account.hasMany(models.Transaction, {
        foreignKey: "account_id",
      });
    }
  }
  Account.init(
    {
      customer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      branch_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      account_type: {
        allowNull: false,
        type: DataTypes.ENUM("Savings", "Current", "Salary"),
      },
      account_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      open_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      balance: {
        defaultValue: 0.0,
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Account",
      tableName: "Accounts",
    }
  );
  return Account;
};
