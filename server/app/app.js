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
const departmentsController = new Departments();
const employeesController = new Employees();
const shiftsController = new Shifts();


app.use(cores())
app.use(express.json())

dbConnection()

app.use('/', LoginUser.router)
app.use('/', users.router)
app.use('/departments', departmentsController.router)
app.use('/employees', employeesController.router)
app.use('/shifts', shiftsController.router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port: ${process.env.PORT || 3000}`);
})