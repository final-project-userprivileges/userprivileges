'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    CustomerId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};