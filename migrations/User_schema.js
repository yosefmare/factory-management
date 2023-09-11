const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'please enter your full name'],
        trim: true,
    },

    numberOfActions: Number

}, { versionKey: false })

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel