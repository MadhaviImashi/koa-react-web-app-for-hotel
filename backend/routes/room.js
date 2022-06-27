const KoaRouter = require('koa-router');
const { addRoom, getAllRooms } = require('../controllers/room');

const Router = new KoaRouter({
    prefix: "/api/rooms"
})

Router.get('/', getAllRooms);
Router.post('/', addRoom)

module.exports = Router;