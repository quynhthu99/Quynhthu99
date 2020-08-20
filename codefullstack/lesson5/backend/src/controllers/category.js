// xu ly du lieu lay tu service
const categoryService = require('../services/category')

const getAllCategory = (req,res) =>{
  categoryService.getAllCategory(req,res)
}
const getAllCategoryById = (req,res) =>{
    res.send("get one")
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