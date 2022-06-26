const Koa = require ("Koa");
const bodyParser = require ("koa-bodyParser");
//const cors 3rd party pckg- to enable communication between 2 different host platforms
const Cors = require ("koa-cors");
const DbClient = require ('./dal/index.js');

//create a new server(app) using Koa.js
const app = new Koa();

//add a cors parameter to each request header
app.use(Cors());
app.use(bodyParser());

const PORT = process.env.PORT || 4000

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
    DbClient; //run the mongodb connection file
    console.log(`server started on port ${PORT}`);
});