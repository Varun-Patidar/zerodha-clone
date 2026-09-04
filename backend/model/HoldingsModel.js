const {model} =  require("mongoose");

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holdings", HoldingsSchema);

module.exports = {HoldingsModel};
