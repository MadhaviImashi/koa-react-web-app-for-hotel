const Router = require("koa-router");
const httpStatus = require('http-status');
const { getAll, save } = require("../api/inventory.js");

const inventoryRouter = new Router({
  prefix: "/inventory",
});

inventoryRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.status = httpStatus.OK;
  ctx.set("Content-Type", "application/json");
});

inventoryRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", 'application.json');
})

module.exports = inventoryRouter;
