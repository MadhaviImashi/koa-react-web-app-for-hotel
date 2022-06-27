const Room = require('../models/room');

const getAllRooms = async (ctx) => {
    try {
        let allRooms = await Room.find({});
        ctx.set("Content-Type", "application/json");
        ctx.body = allRooms;
        ctx.status = 200;
    }
    catch (err) {
        ctx.status = err.status || 500;
        ctx.body = {
            message: "couldn't fetch room details"
        }
    }
}

const addRoom = async (ctx) => {
    try {
        let newRoom = new Room(ctx.request.body);
        await newRoom.save();
        ctx.body = {
            message: "Room added successfully",
            newRoom
        }
    }
    catch (err) {
        ctx.status = err.status || 500;
        ctx.body = {
            message: "couldn't add room"
        }
    }
}

module.exports = {
    getAllRooms,
    addRoom
}