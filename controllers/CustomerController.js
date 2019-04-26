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
			// static login(check) {
			//     let loginCheck = {
			//       whereField : "username",
			//       valueField : check.username
			//     }
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