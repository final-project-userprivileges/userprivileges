'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    tier: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};