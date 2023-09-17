const router = require('express').Router()
const EmployeeModel = require('../../models/Employee_scheme')

class Employees {
    constructor() {
        this.router = router
        router.get('/employees', this.getEmployees)
        router.post('/employees', this.create)
        router.get('/employees/:id', this.getEmployeesById)
        router.put('/employees/:id', this.update)
        router.delete('/employees/:id', this.delete)
    }

    async getEmployees(req, res) {
        try {
            const employees = await EmployeeModel.find()
            .populate("departmentsID")
            .populate("shiftsID")
            res.status(200).json(employees)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async getEmployeesById(req, res) {
        const { id } = req.params;

        try {
            const employees = await EmployeeModel.findById(id)
            .populate("departmentsID")
            .populate("shiftsID")
            res.status(200).json(employees)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            const updatedData = await EmployeeModel.findByIdAndUpdate(id, data);

            if (!updatedData) {
                return res.status(404).json({ message: "Employee not found" });

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
            const newData = await EmployeeModel.create(data)

            res.status(200).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "creation failed" });
        }
    }


    async delete(req, res) {
        const { id } = req.params;

        try {
            await EmployeeModel.findByIdAndDelete(id)

            res.status(200).json({ message: "deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "deleted failed" });
        }
    }

}

module.exports = Employees
