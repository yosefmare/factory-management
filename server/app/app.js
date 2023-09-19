require('dotenv').config()
const express = require('express')
const dbConnection = require('../config/database')
const cores = require('cors')
const login = require('./controllers/login')
const Users = require('./controllers/users_operations')
const Employees = require('./controllers/employees_operations')
const Departments = require('./controllers/departments_operations')
const Shifts = require('./controllers/shifts_operations')
const app = express()

const LoginUser = new login()
const users = new Users()
const employees = new Employees()
const departments = new Departments()
const shifts = new Shifts()

app.use(cores())
app.use(express.json())

dbConnection()

app.use('/', LoginUser.router)
app.use('/', users.router)
app.use('/', employees.router)
app.use('/', departments.router)
app.use('/', shifts.router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port: ${process.env.PORT}`);
})