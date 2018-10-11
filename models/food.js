const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  user: { type: String, required: true },
  list: { type: String, required: true },
  item: { type: String, required: true},
  qty: { type: Number, required: true},
  entryDate: { type: Date, default: Date.now },
  isFridge: { type: Boolean, default: false}, 
  fridgeDate: { type: Date },
  exprDate: { type: Date },
  isTrash: { type: Boolean, default: false} 
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
