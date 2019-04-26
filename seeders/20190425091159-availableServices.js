'use strict';
var fs = require("fs");
let data = fs.readFileSync('./serviceList.json', "utf8").split(',')
let parse = JSON.parse(data)
  // console.log(data + 'iniii dataaa')
  //   console.log(parse)

module.exports = {
  up: (queryInterface, Sequelize) => {
    let temp = []
    for(let i = 0; i < parse.length; i++){
          temp.push({
            name : parse[i].name,
            price : parse[i].price,
            pointplus : parse[i].pointplus,
            timepurchased : parse[i].timepurchased,
            createdAt : new Date,
            updatedAt : new Date
          })
          // console.log(temp)
        }
      return queryInterface.bulkInsert('Services', temp)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Services', null, {})
  }
};