const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    name: String,
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
    },
    departmentWorkers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
    }],
}, {versionKey: false});

const DepartmentModel = mongoose.model("departments", departmentSchema)

module.exports = DepartmentModel