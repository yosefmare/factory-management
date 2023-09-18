const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    startWorkYear :Number,
    departmentsID:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'departments',
        },
    ],
    shiftsID:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shifts',
        },
    ]
}, {versionKey: false});

const EmployeeModel = mongoose.model("employees", employeeSchema)

module.exports = EmployeeModel