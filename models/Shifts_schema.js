// shiftSchema.js
const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Please enter the date and time of the shift'],
    },
    startingHour: {
        type: Number,
        required: [true, 'Please enter the starting hour of the shift'],
    },
    endingHour: {
        type: Number,
        required: [true, 'Please enter the ending hour of the shift'],
    },
}, { versionKey: false });

const ShiftModel = mongoose.model("shifts", shiftSchema)

module.exports = ShiftModel;
