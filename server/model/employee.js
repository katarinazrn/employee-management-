const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("./dbconfig");

class Employee extends Model { }

Employee.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    jobName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    profilePicture: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    modelName: "employee",
    timestamps: true
  }
);

module.exports = Employee;