const koaRouter = require('koa-router');
const createSubject = require('../api/subject');

const Router = new koaRouter({
    prefix: 'api/subjects'
})

Router.post('/add', createSubject);

module.exports = Router;