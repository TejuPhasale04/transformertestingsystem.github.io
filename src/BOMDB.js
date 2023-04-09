const conection=require("./Connection");
const mongoose = require('mongoose');
const bomSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true
  },
  discount: {
    type: String,
    required: true
  }
});

const BOM = mongoose.model('BOM', bomSchema);

module.exports = BOM;
