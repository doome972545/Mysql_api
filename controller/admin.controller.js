const connection = require('../config/db')
const jwt = require('jsonwebtoken')

module.exports = {
    loginAdmin:(req, res) => {
        const user = req.body;
        try {
            connection.query('SELECT * FROM admin_table WHERE email=?AND password = ?', [user.email,user.password], (err, result, field) => {
                if (err) {
                    res.status(400).send({ message: "Error login" });
                }
                if (!result.length > 0) {
                    res.status(404).send({ message: "Not found user" });
                } else {
                    const token = jwt.sign({ id: result[0].id,isAdmin:result[0].isAdmin },process.env.JWT_SEC, { expiresIn: '3d' });
                    res.status(200).json({ user: result[0], token });
                }
            });
        } catch (e) {
            res.status(500).send({ message: "Login error" });
        }
    }
}