class Crud {
    constructor(model) {
        this.model = model
    }

    async geAll(req, res) {
        try {
            let query = this.model.find();

            if (this.model.modelName === 'departments') {
                query = query.populate("manager departmentWorkers");
                console.log(1);
            } else if (this.model.modelName === 'employees') {
                query = query.populate("departmentsID shiftsID");
                console.log(this.model.modelName);
            } else if (this.model.modelName === 'shifts') {
                query = query.populate("employees");
                console.log(3);
            }

            const data = await query.exec();

            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "fetching filed" });
        }
    }



    async getById(req, res) {

        const { id } = req.params;
        try {
            let query = this.model.findById(id);

            if (this.model.modelName === 'departments') {
                query = query.populate("manager departmentWorkers");

            } else if (this.model.modelName === 'employees') {
                query = query.populate("departmentsID shiftsID");

            } else if (this.model.modelName === 'shifts') {
                query = query.populate("employees");

            }

            const data = await query.exec();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            const updatedData = await this.model.findByIdAndUpdate(id, data);

            if (!updatedData) {
                return res.status(404).json({ message: "data not found" });

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
            const newData = await this.model.create(data)

            res.status(200).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "creation failed" });
        }
    }


    async delete(req, res) {
        const { id } = req.params;

        try {
            const data = await this.model.findByIdAndDelete(id)

            if (!data) {
                return res.status(404).json({ message: "data not found" });

            }

            res.status(200).json({ message: "deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "deleted failed" });
        }
    }

}

module.exports = Crud