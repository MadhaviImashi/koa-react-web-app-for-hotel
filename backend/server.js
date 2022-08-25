const Koa = require ("Koa");
const bodyParser = require("koa-bodyparser");
//const cors 3rd party pckg- to enable communication between 2 different host platforms
const Cors = require("koa-cors");
const KoaRouter = require('koa-router');
const DbClient = require('./dal/index.js');
const mongoose = require('mongoose');
//import routes
const categoryRouter = require('./routes/category');
const roomRouter = require('./routes/room');
const authRouter = require('./routes/authRoutes');
const koaBody = require("koa-body");

//create a new server(app) using Koa.j
const app = new Koa();
const router = new KoaRouter();

//add a cors parameter to each request header
app.use(Cors());
app.use(bodyParser());

const PORT = process.env.PORT || 4000

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

app.use(router.routes()).use(router.allowedMethods());
app.use(categoryRouter.routes())
app.use(roomRouter.routes())
app.use(authRouter.routes())

app.listen(PORT, () => {
    DbClient(); //run the mongodb connection file
    console.log(`server started on port ${PORT}`);
});

// mongoose.connect("mongodb://127.0.0.1:27017/practice-final-exam-db",() => {
//   app.listen(4000)
// })