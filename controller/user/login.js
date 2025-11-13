const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {    //api/login
    const { username, password } = req.body || {};

    if (!username || !password) { //ใช้แสดงว่าข้อมูลไม่ถูกต้อง
        return res.status(400).json({ message: 'username and password are required/ชื่อหรือรหัสผ่านไม่ถูก' });
    }

    if (username === 'admin' && password === '1234') {
        return res.json({ message: 'Login success/ล็อกอินสำเร็จ' });
    }

    return res.status(401).json({ message: 'error' });
});

module.exports = router;