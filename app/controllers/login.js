const router = require('express').Router()
const userData = require('../../DAL/placeholder_service')

class Login {
    constructor() {
        this.router = router
        router.post('/login', this.login)
    }

    async login(req, res) {
        try {
            const reqData = req.body
            const userlognData = await userData()
            const user = userlognData.find((data) => {
                return reqData.username === data.username &&
                    reqData.email === data.email
            })

            if (user) {
                return res.status(200).json({ massage: "login successfully" })
            } else {
                console.log(user);
                return res.status(404).json({ massage: "user not found" })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ massage: "fetching filed" })
        }
    }
}

module.exports = Login
