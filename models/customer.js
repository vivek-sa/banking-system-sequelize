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
      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      phone_no: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date_of_birth: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      occupation: {
        type: DataTypes.STRING,
      },
      date_joined: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Customer",
      tableName: "Customers",
    }
  );
  return Customer;
};
