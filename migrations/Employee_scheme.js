const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    startWorkYear :Number,
    DepartmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departments',
    },
}, {versionKey: false});

const EmployeeModel = mongoose.model("employees", employeeSchema)

module.exports = EmployeeModel