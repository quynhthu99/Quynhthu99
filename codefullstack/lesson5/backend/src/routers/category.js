// lay tu controller
// cách 1
// const route = require('express');
// const Route = express.Router();


//cách 2
const Route = require('express').Router();
const { deleteCategoryById} = require('../controllers/category')
const controllerCategory = require('../controllers/category')

// Router.get('/',hamxuli)
Route.get('/',controllerCategory.getAllCategory);
Route.get('/:id',controllerCategory.getAllCategoryById);
Route.post('/',controllerCategory.createCategory);
Route.put('/:id',controllerCategory.updateCategoryById);
Route.delete('/:id',deleteCategoryById);

module.exports = Route;