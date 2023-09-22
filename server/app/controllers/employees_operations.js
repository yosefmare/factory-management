const express = require('express');
const Crud = require('./Crud');
const EmployeeModel = require('../../models/Employee_scheme');

class Employees {
    constructor() {
        this.crudInstance = new Crud(EmployeeModel);

        this.router = express.Router();

        this.router.get('/', this.crudInstance.geAll.bind(this.crudInstance));
        this.router.post('/', this.crudInstance.create.bind(this.crudInstance));
        this.router.get('/:id', this.crudInstance.getById.bind(this.crudInstance));
        this.router.put('/:id', this.crudInstance.update.bind(this.crudInstance));
        this.router.delete('/:id', this.crudInstance.delete.bind(this.crudInstance));
    }
}

module.exports = Employees;
