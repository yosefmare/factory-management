const express = require('express');
const Crud = require('./Crud');
const DepartmentModel = require('../../models/Department_schema');

class Departments {
    constructor() {
        this.crudInstance = new Crud(DepartmentModel);

        this.router = express.Router();

        this.router.get('/', this.crudInstance.geAll.bind(this.crudInstance));
        this.router.post('/', this.crudInstance.create.bind(this.crudInstance));
        this.router.get('/:id', this.crudInstance.getById.bind(this.crudInstance));
        this.router.put('/:id', this.crudInstance.update.bind(this.crudInstance));
        this.router.delete('/:id', this.crudInstance.delete.bind(this.crudInstance));
    }
}

module.exports = Departments;
