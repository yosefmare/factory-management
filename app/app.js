require('dotenv').config()
const express = require('express')
const dbConnection = require('../config/database')
const login = require('./controllers/login')
const cores = require('cors')
const Login = require('./controllers/login')
const app = express()

const LoginUser = new login()

app.use(cores())
app.use(express.json())

dbConnection()

app.use('/', LoginUser.router)

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
})