const router = require('express').Router()
const UsersModel = require('../../models/User_schema')

class Users {
    constructor() {
        this.router = router
        router.get('/users', this.getUsers)
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
}

module.exports = Users
