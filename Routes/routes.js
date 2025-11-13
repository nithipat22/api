const express = rquire(express);
const router = express.Router();
const logincontroller = require('../controller/user/login')
const registerRoutes = require('../controller/user/register')
const deleteRoutes = require('../controller/user/delete')

router.post('/login', loginController);
router.post('/register', registerController);
router.post('/delete', deleteRoutes);


module.exports = router