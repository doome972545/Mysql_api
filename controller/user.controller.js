const connection = require('../config/db')
const verifyAuth = require('../middleware/verifyToken')

module.exports = {
    readUser: (req, res) => {
        try {
            connection.query("SELECT * FROM id_card_information", (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err)
                }
                res.status(200).send(result)
            })
        } catch (e) {
            res.status(500).send({ massage: "couldn't read" })
        }
    },

    readUserId: (req, res) => {
        try {
            const id = req.params.id
            connection.query('SELECT * FROM `id_card_information` WHERE id = ?', [id], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send(err)
                }
                res.status(200).send(result)
            })
        } catch (err) {
            res.status(500).send({ massage: "couldn't read", err })
        }
    }

}
