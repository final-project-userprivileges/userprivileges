const routes = require('express').Router();
// const CustomerController = require('../controllers/CustomerController');
// const TransactionController = require('../controllers/TransactionController');
const Model = require('../models');
const Customer = Model.Customer;

routes.get('/loginRegister', (req, res) => {
    // CustomerController.getAllCustomer()
    // .then(Customer => {
        // res.send(students);
        res.render('./loginRegister.ejs'/*,{data: students}*/);
    // })
    // .catch(err => {
    //     res.send(err);
    // })
});