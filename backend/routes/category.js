const KoaRouter = require('koa-router');
const { getAll, addCategory } = require('../controllers/category');

const router = new KoaRouter({
    prefix: "/api/category"
});

router.get('/', getAll);
router.post('/', addCategory);

module.exports = router;