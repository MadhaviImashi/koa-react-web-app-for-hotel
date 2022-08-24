const KoaRouter = require('koa-router');
const { signup, login } = require('../api/auth');

const router = new KoaRouter({
    prefix: "/api/auth"
});

router.post('/signup', signup)
router.post('/login', login);

module.exports = router;