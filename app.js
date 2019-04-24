const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.get("/services", function (req, res) {
    // res.render("student.ejs", {
    //   studentsList: students
    // })
})

app.get("/register", function (req, res) {
	// console.log(req.query.inputbaru)
 //    students.push(req.query.inputbaru)
 //    res.redirect("/students")
})

app.get("/summary", function (req, res) {
    // res.render("summary.ejs",{
    //   teachersList: teachers
	// })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))