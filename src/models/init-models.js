const DataTypes = require("sequelize").DataTypes;
const _usuario = require("./usuario");

function initModels(sequelize) {
  const usuario = _usuario(sequelize, DataTypes);
  return {
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
