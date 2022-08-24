const KoaRouter = require('koa-router');
const { addRoom, getAllRooms, getCategoriesOfARoom, getRoomById } = require('../api/room');

const Router = new KoaRouter({
    prefix: "/api/rooms"
})

Router.get('/all', getAllRooms);
Router.post('/:id', getRoomById);
Router.post('/add', addRoom);
Router.get('/categories-by-room/:id', getCategoriesOfARoom);

module.exports = Router;