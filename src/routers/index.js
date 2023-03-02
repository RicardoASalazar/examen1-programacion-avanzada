const authRoutes = require("./auth.routes");
const first = require('./first-practice.routes')

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes),
  app.use('/api/v1/operaciones',first)
};

module.exports = routerApi;
