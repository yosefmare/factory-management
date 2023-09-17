const router = require('express').Router()
const ShiftModel = require('../../models/Shifts_schema')

class Shifts {
    constructor() {
        this.router = router
        router.get('/shifts', this.getEmployees)
        router.post('/shifts', this.create)
        router.get('/shifts/:id', this.getEmployeesById)
        router.put('/shifts/:id', this.update)
    }

    async getEmployees(req, res) {
        try {
            const employees = await ShiftModel.find()
                .populate("employees")
            res.status(200).json(employees)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async getEmployeesById(req, res) {
        const { id } = req.params;

        try {
            const department = await ShiftModel.findById(id)
            .populate("employees")
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
            const updatedData = await ShiftModel.findByIdAndUpdate(id, data);

            if (!updatedData) {
                return res.status(404).json({ message: "shift not found" });

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
            const newData = await ShiftModel.create(data)

            res.status(200).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "creation failed" });
        }
    }
}

module.exports = Shifts
