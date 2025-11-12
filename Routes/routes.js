const express = require('express');
const router = express.Router();


const loginRouter = require('../controller/user/login');
const registerRouter = require('../controller/user/register');

router.post('/login', loginRouter);
router.post('/register', registerRouter);

module.exports = router;