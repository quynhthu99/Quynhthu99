const pool = require('../utills/db')

const getAllCategory = (req,res) =>{
    pool.query('select * from `category`;', (err, data)=>{
        if (err){ res.send('Eror Query')
        console.log(err)}
        res.send(data)
    })
}
const getAllCategoryById = (req,res) =>{
    pool.query('select * from `category` where `categoryId` = "4f8fcbe7-8dad-39e7-b105-5765d373f926"',(err,data) =>{
        if (err) {res.send('Erorr Query')
                console.log(err)}
                else {
                    res.send(data)
                }
    })
}
const createCategory = (req,res) =>{
    res.send('create ')
}
const updateCategoryById = (req,res) =>{
    res.send('update')
}
const deleteCategoryById = (req,res) =>{
    res.send('delete')
}

const controllerCategory = {
    getAllCategory,
    getAllCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}

module.exports = controllerCategory