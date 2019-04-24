'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    pointplus: DataTypes.INTEGER,
    timepurchased: DataTypes.INTEGER
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};