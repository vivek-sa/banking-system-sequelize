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
      customer_id: DataTypes.INTEGER,
      branch_id: DataTypes.INTEGER,
      account_type: DataTypes.ENUM,
      account_number: DataTypes.STRING,
      open_date: DataTypes.DATE,
      balance: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
