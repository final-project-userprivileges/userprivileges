const express = require('express')
const app = express()
const port = 3000
const CustomerController = require('./controllers/CustomerController.js')
// const home = require('./routes');
// const loginRegister = require('./routes/loginRegister');
// const subjects = require('./routes/subjects');
// const bodyParser = require('body-parser');


let data = CustomerController.getAllCustomer()
console.log(data)
// app.get("/", (req, res) => {
//   res.render("home.ejs")
// })

// app.get("/loginRegister", function (req, res) {
// 	res.send("tes express")
	// res.render("login-register.ejs", {
// })

// app.get("/register", function (req, res) {
// 	// console.log(req.query.inputbaru)
//  //    students.push(req.query.inputbaru)
//  //    res.redirect("/students")
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))