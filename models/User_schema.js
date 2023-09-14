const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        
    },
    externalId: Number,
    numberOfActions: Number

}, { versionKey: false })

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel