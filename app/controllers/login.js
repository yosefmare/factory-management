const router = require('express').Router()
const userData = require('../../DAL/placeholder_service')
const usersChecker = require('./add_user_to_db')
const UsersModel = require('../../models/User_schema')


class Login {
    constructor() {
        this.router = router
        router.post('/login', this.login)
    }

    async login(req, res) {
        try {
            const reqData = req.body
            const userlognData = await userData()
            const user = userlognData.find((data) =>
                reqData.username === data.username &&
                reqData.email === data.email
            )

            if (user) {
                usersChecker(user)
                return res.status(200).json( user)
            } else {
                return res.status(404).json({ massage: "user not found" })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }
}

module.exports = Login
