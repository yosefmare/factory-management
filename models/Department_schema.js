const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    name: String,
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
    },
    departmentWorkers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }],
}, {versionKey: false});

const DepartmentModel = mongoose.model("departments", departmentSchema)

module.exports = DepartmentModel