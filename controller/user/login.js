const express = require('express')
const router = express.Router()
const checkLogin = require('../../functions/checklogin');


router.post('/', (req, res) => {
    const { username, password } = req.body

    const result = checkLogin(username, password)

    return res.status(result.status).json({ message: result.message })
})

module.exports = router