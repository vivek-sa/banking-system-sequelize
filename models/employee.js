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
      address_id: DataTypes.INTEGER,
      branch_id: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      gender: DataTypes.STRING,
      position: DataTypes.ENUM("Manager", "Employee"),
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
