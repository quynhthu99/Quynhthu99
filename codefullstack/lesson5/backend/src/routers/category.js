// cách 1
// const route = require('express');
// const Route = express.Route();


//cách 2
const Route = require('express').Router();


const getAllCategory = (req,res) =>{
    res.send('get all')
}
const getAllCategoryById = (req,res) =>{
    res.send('get ')
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

// Router.get('/',hamxuli)
Route.get('/',getAllCategory);
Route.get('/:id',getAllCategoryById);
Route.post('/',createCategory);
Route.put('/:id',updateCategoryById);
Route.delete('/:id',deleteCategoryById);

module.exports = Route;