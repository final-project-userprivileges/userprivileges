const Model = require('../models');
const Transaction = Model.Transaction

class TransactionController{
	static getAll(){
		return new Promise( (resolve, reject) => {
            Transaction.findAll({include: 
                [
                    {model : Model.Customer}, 
                    {model : Model.Service}
                ]})
            .then(dataTransaction => {
                resolve(dataTransaction);
            })
            .catch(err => {
                reject({msg :`Error tidak dapat membaca semua data transaksi`, err: err})
            })
        })
	}

	static PointOfSales(data){
		return new Promise((resolve,reject) => {
			Transaction.create(
				{
					CustomerId : data.CustomerId,
					ServiceId : data.ServiceId,
					point : data.point,
					updateAt : new Date()
				}
			).then(data => {
				resolve(data);
			})
			.catch(err => {
				reject({msg: `Error tidak dapat memproses transaksi`, err: err})
			})
		})
	}


	static findTransaction(id){
		return new Promise((resolve,reject) => {
			// Transaction.findByPk(id)
			// .then()
		}
	}

}

module.exports = TransactionController