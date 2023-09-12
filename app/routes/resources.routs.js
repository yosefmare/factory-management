const express = require('express')
const { UserModel, DepartmentModel, EmployeeModel, ShiftModel } = require('../../migrations/schmas_root');
const CRUDoperations = require('../controllers/crud_oparations');



const models = {
    users: new CRUDoperations(UserModel),
    departments: new CRUDoperations(DepartmentModel),
    employees: new CRUDoperations(EmployeeModel),
    shifts: new CRUDoperations(ShiftModel),
};

function routes(app) {
    for (const modelName in models) {
        const modelCRUD = models[modelName];

        app.get(`/${modelName}`, (req, res) => modelCRUD.get(req, res));
        app.get(`/${modelName}/:id`, (req, res) => modelCRUD.getById(req, res));
        app.post(`/${modelName}`, (req, res) => modelCRUD.create(req, res));
        app.put(`/${modelName}/:id`, (req, res) => modelCRUD.update(req, res));
        app.delete(`/${modelName}/:id`, (req, res) => modelCRUD.delete(req, res));
    }
}

module.exports = routes