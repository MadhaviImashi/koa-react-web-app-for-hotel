const KoaRouter = require('koa-router');
const { getAll, addCategory, getRoomsByCategory, addRoomToACategory } = require('../api/category');

const router = new KoaRouter({
    prefix: "/api/categories"
});

router.get('/all', getAll);
router.post('/add', addCategory);
router.get('/rooms-by-category/:id', getRoomsByCategory);
router.post('/add-room/:id', addRoomToACategory)

module.exports = router;