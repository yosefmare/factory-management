const mongoose = require('mongoose')

const dbConnection = () => {
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connect to database successfully');
}).catch((error) => {
    console.log(error);
})
}

module.exports = dbConnection