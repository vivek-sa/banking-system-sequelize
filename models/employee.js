"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Address, {
        foreignKey: "address_id",
      });
    }
  }
  Employee.init(
    {
      address_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      branch_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
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
      position: {
        allowNull: false,
        type: DataTypes.ENUM("Manager", "Employee"),
        defaultValue: "Employee",
      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Employee",
      tableName: "Employees",
    }
  );
  return Employee;
};
