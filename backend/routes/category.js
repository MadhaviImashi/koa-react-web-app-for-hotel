const KoaRouter = require('koa-router');
const { getAll, addCategory, getRoomsByCategory } = require('../controllers/category');

const router = new KoaRouter({
    prefix: "/api/categories"
});

router.get('/all', getAll);
router.post('/add', addCategory);
router.get('/rooms-by-category/:id', getRoomsByCategory);

module.exports = router;