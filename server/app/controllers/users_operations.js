const router = require('express').Router()
const UsersModel = require('../../models/User_schema')
const ActionsLogFile = require('./actions_log_file')

class Users {
    constructor() {
        this.router = router
        router.get('/users', this.getUsers)
        router.get('/users/:id', this.getUserById)
        router.put('/users/:id', this.update)
    }

    async getUsers(req, res) {
        try {
            const users = await UsersModel.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }
    
    async getUserById(req, res) {
        const { id } = req.params;
        
        try {
            const user = await UsersModel.findById(id);
            
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "fetching failed" });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;
        
        try {
            const updatedData = await UsersModel.findByIdAndUpdate(id, data);
            
            if (!updatedData) {
                return res.status(404).json({ message: "User not found" });
                
            }
            
            res.status(200).json({massage: "updated successfully"});
            await ActionsLogFile(id)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Updating failed" });
        }
    }

}

module.exports = Users
