require('dotenv').config()
const express = require('express')
const dbConnection = require('../config/database')
const routes = require('./routes/resources.routs')
const cores = require('cors')
const app = express()

app.use(cores())
app.use(express.json())

dbConnection()

routes(app)

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
})