const express = require('express')
const router = express.Router()

let users = [
    { username: "pun", password: "1234" },
    { username: "admin", password: "1234" },
    { username: "tom", password: "1234" },
];

router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            status: 400,
            message: "กรุณาส่ง username และ password"
        });
    }

    const userIndex = users.findIndex(
        u => u.username === username && u.password === password
    );

    if (userIndex === -1) {
        return res.status(404).json({
            status: 404,
            message: "ไม่พบผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
        });
    }
    const deletedUser = users.splice(userIndex, 1)[0];

    return res.status(200).json({
        status: 200,
        message: "ลบผู้ใช้งานสำเร็จ",
        deletedUser: deletedUser,
        remainingUsers: users
    });
});

module.exports = router