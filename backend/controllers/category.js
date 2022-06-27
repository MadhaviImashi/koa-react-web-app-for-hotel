const Category = require('../models/category');

const getAll = async (ctx) => {
    try {
        let data = await Category.find({});
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        return ctx.body = {
            message: "get all categories",
            data
        }
    }
    catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "couldn't fetch categories list"
        }
    }
}

const getRoomsByCategory = async (ctx) => {
    let categoryId = ctx.params.id;

    try {
        let selectedCategory = await Category.findById(categoryId).populate({path: "rooms"});
        let roomsInCategory = selectedCategory.rooms;
        console.log('rooms in category', roomsInCategory);
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        return ctx.body = {
            message: "get rooms by category",
            roomsInCategory
        }
    }
    catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "couldn't fetch rooms by category"
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

const addRoomToACategory = async (ctx) => {
    let roomId = ctx.request.body.roomId;
    try {
        let category = await Category.findById(ctx.params.id);
        //add room to selected category
        category.rooms.push(roomId);
        category.save();
        console.log('categ', category);
        ctx.status = 201;
        return ctx.body = "room added to category";
    }
    catch (err) {
        ctx.status = err.status || 500;
    }
}

module.exports = {
    getAll,
    addCategory,
    getRoomsByCategory,
    addRoomToACategory
}