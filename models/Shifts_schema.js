const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            return currentDate;
        },
    },
    startingHour: Number,
    endingHour: Number,
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'employees',
        },
    ]
}, { versionKey: false });

const ShiftModel = mongoose.model("shifts", shiftSchema)

module.exports = ShiftModel;
