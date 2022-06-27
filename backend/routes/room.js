const KoaRouter = require('koa-router');
const { addRoom, getAllRooms, getCategoriesOfARoom } = require('../controllers/room');

const Router = new KoaRouter({
    prefix: "/api/rooms"
})

Router.get('/all', getAllRooms);
Router.post('/add', addRoom);
Router.get('/categories-by-room/:id', getCategoriesOfARoom);

module.exports = Router;