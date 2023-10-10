"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsToMany(models.Address, {
        through: models.CustomerAddress,
        foreignKey: "customer_id",
        as: "addresses",
      });
      Customer.hasMany(models.Account, {
        foreignKey: "customer_id",
      });
    }
  }
  Customer.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      gender: DataTypes.STRING,
      occupation: DataTypes.STRING,
      date_joined: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
