const httpStatus = require('http-status');
const Category = require('../models/category');

const getAll = async (ctx) => {
    try {
        let allCategories = await Category.find({});
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        return ctx.body = {
            message: "get all categories",
            allCategories
        }
    }
    catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "couldn't fetch categories list"
        }
    }
}

const addCategory = async (ctx) => {

   let newCategory = new Category(ctx.request.body);
  
    try {
        await newCategory.save();
        ctx.set("Content-Type", "application/json");
        ctx.status = 201;
        return ctx.body = {
            message: "category added successfully",
            newCategory
        }
    }  
    catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "couldn't add category"
        }
    }
}

module.exports = {
    getAll,
    addCategory
}