const router = require('express').Router()
const DepartmentModel = require('../../models/Department_schema')

class Departments {
    constructor() {
        this.router = router
        router.get('/departments', this.getEmployees)
        router.post('/departments', this.create)
        router.get('/departments/:id', this.getEmployeesById)
        router.put('/departments/:id', this.update)
        router.delete('/departments/:id', this.delete)
    }

    async getEmployees(req, res) {
        try {
            const employees = await DepartmentModel.find()
                .populate("manager")
                .populate("departmentWorkers")
            res.status(200).json(employees)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async getEmployeesById(req, res) {
        const { id } = req.params;

        try {
            const department = await DepartmentModel.findById(id)
            .populate("manager")
            .populate("departmentWorkers")
            res.status(200).json(department)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            const updatedData = await DepartmentModel.findByIdAndUpdate(id, data);

            if (!updatedData) {
                return res.status(404).json({ message: "department not found" });

            }

            res.status(200).json({ massage: "updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Updating failed" });
        }
    }

    async create(req, res) {
        const data = req.body;

        try {
            const newData = await DepartmentModel.create(data)

            res.status(200).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "creation failed" });
        }
    }


    async delete(req, res) {
        const { id } = req.params;

        try {
            await DepartmentModel.findByIdAndDelete(id)

            res.status(200).json({ message: "deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "deleted failed" });
        }
    }

}

module.exports = Departments
