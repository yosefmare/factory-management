require('dotenv').config()
const express = require('express')
const dbConnection = require('../config/database')
const cores = require('cors')
const app = express()

app.use(cores())
app.use(express.json())

dbConnection()

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
})