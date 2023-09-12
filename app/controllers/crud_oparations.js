const { UserModel, DepartmentModel, EmployeeModel, ShiftModel } = require('../../migrations/schmas_root')

class CRUDoperations {
    constructor(Model){
        this.Model = Model;
    }
    async get(req, res) {
        try {
            const document = await this.Model.find();
            res.status(200).json(document)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async getById(req, res) {
        const { id } = req.params
        try {
            const document = await this.Model.findById(id);
            res.status(200).json(document)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async create(req, res) {
        const data = req.body
        try {
            const document = new this.Model(data);
            if (document) {
                await document.save(data);
                res.status(201).json(document)
            } else {
                res.status(404).json({ massage: "creation filed" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed", error })
        }
    }

    async update(req, res) {
        const { id } = req.params
        const { data } = req.body
        try {
            const document = await this.Model.findByIdAndUpdate(id, data);
            if (!document) {
                res.status(404).json({ massage: "Document not found" })
            } else {
                res.status(404).json({ massage: "Document updated" }, document)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }

    async delete(req, res) {
        const { id } = req.params
        try {
            const document = await this.Model.findByIdAndDelete(id);
            if (!document) {
                res.status(404).json({ massage: "Document not found" })
            }else {
                res.status(200).json({ massage: "Document has bin deleted" })

            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }
}

module.exports =CRUDoperations