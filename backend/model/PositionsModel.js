const {model} =  require("mongoose");

const {PositionsSchema} = require('../schemas/PositionsSchema');

const PositionsModel = new model("positions", PositionsSchema);

module.exports = {PositionsModel};
