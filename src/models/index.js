const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const {
  usuario,
} = models;

module.exports = {
  usuario,
};
