const Model = require('../models/');
const Service = Model.Service

class ServiceController{

	static getAllService(){
		return new Promise((resolve,reject) => {
			Service.findAll()
			.then(Services => {
				resolve(Services);
			})
			.catch(err => {
				reject({msg : `Error dalam membaca data Service`, err: err})
			})
		})
	}

	static findService(id){
		return new Promise((resolve,reject) => {
			Service.findByPk(id)
			.then(students => {
				resolve(students);
			})
			.catch(err => {
				reject({msg : `Error tidak dapat menemukan Service dengan id tersebut`, err: err})
			})
		})
	}
}




module.exports = ServiceController