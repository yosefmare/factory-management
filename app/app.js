require('dotenv').config()
const express = require('express')
const dbConnection = require('../config/database')
const login = require('./controllers/login')
const cores = require('cors')
const Users = require('./controllers/users_operations')
const app = express()

const LoginUser = new login()
const users = new Users()

app.use(cores())
app.use(express.json())

dbConnection()

app.use('/', LoginUser.router)
app.use('/', users.router)

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
})