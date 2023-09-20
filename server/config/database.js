const mongoose = require('mongoose')

const dbConnection = () => {
mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/factory-managementDB").then(() => {
    console.log('connect to database successfully');
}).catch((error) => {
    console.log(error);
})
}

module.exports = dbConnection