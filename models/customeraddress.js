"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomerAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerAddress.init(
    {
      customer_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      modelName: "CustomerAddress",
      tableName: "CustomerAddresses",
    }
  );
  return CustomerAddress;
};
