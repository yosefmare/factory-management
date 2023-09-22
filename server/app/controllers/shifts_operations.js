const express = require('express');
const Crud = require('./Crud'); // Import the Crud class

const ShiftModel = require('../../models/Shifts_schema');

class Shifts {
    constructor() {
        this.crudInstance = new Crud(ShiftModel);
        this.router = express.Router();
        this.router.get('/', this.crudInstance.geAll.bind(this.crudInstance));
        this.router.post('/', this.crudInstance.create.bind(this.crudInstance));
        this.router.get('/:id', this.crudInstance.getById.bind(this.crudInstance));
        this.router.put('/:id', this.crudInstance.update.bind(this.crudInstance));
        this.router.delete('/:id', this.crudInstance.delete.bind(this.crudInstance));
    }
}

module.exports = Shifts;

