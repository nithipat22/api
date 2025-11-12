const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "กรอกข้อมูลไม่ครบ" });
    }

    res.status(200).json({ message: "สมัครสมาชิกสำเร็จ" });
});

module.exports = router;