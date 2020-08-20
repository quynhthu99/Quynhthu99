//lay du lieu
const db = require('../utills/db')

const getAllCategory = (req, res) => {
    db.pool.query('SELECT * from category', (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                status: -1,
                message: "Can not get all Category"
            })
        } else {
            res.send({
                status: 1,
                message: result
            })
        }
    })
}
module.exports = {
    getAllCategory
}