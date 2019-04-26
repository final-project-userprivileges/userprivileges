const Model = require('../models/');
const Customer = Model.Customer
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class CustomerController{

	static registerCustomer(data){
		return new Promise((resolve,reject) => {
			Customer.create(
				{
					name : data.name,
					password : data.password,//bcrypt.hashSync(data.password,salt), //beforecreate
					balance : 100000,
					point : 0,
					tier : 'Bronze'
				}
				).then(data => {
					resolve(data);
				})
				.catch(err => {
					reject({msg : `Error dalam menambahkan data Customer`, err: err})
			})
		})
	}
	static loginCustomer(data){
		return new Promise((resolve,reject) => {
			/*
			static login(option) {
			    let loginCheck = {
			      whereField : "username",
			      valueField : option.username
			    }
			    Employee.readOne(loginCheck, (err, employee) => {
			      if (err) {
			        View.display(err)
			      } else {
			        if (employee !== null) {
			          if (employee.password == option.password) {
			              let login = { ///////////////////////////////part of session (bawa2 data customer dan login)
			                whereUpdate : "loggedIn",
			                valueUpdate : 1,
			                whereField : "username",
			                valueField : option.username
			              }
			              Employee.update(login, (err) => {
			                if (err) {
			                  View.display(err)
			                } else {
			                  Employee.readAll((err, employees) => {
			                    if (err) {
			                      View.display(err)
			                    } else {
			                      for (let i = 0; i < employees.length; i++) {
			                        if (employees[i].username !== option.username) {
			                          let logout = {
			                            whereUpdate : "loggedIn",
			                            valueUpdate : 0,
			                            whereField : "username",
			                            valueField : employees[i].username
			                          }
			                          Employee.update(logout, (err) => {
			                            if (err) {

			                            } else {

			                            }
			                          })
			                        }
			                      }
			                      View.display(`user ${option.username} logged in successfully`)
			                    }
			                  })
			                }
			              })
			            }
			          } else {
			            View.display('Username/password salah')
			          }
			        } else {
			          View.display('Username/password salah')
			        }
			      }
			    }) 

			    
			  }


			*/
		})
	}
	static getAllCustomer(){
		return new Promise((resolve,reject) => {
			Customer.findAll()
			.then(customers => {
				resolve(customers);
			})
			.catch(err => {
				reject({msg : `Error dalam membaca data Customer`, err: err})
			})
		})
	}
	static findCustomer(id){
		return new Promise((resolve,reject) => {
			Customer.findByPk(id)
			.then(students => {
				resolve(students);
			})
			.catch(err => {
				reject({msg : `Error tidak dapat menemukan Customer dengan id tersebut`, err: err})
			})
		})
	}
}




module.exports = CustomerController