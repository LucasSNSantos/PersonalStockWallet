const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Active = new Schema({
  ID_User: { type: number, required: true },
  ID_active: { type: number, required: true },
  Price: { type: Number, required: true },
  Date_creation: { type: Date, required: true },
  quantity: { type: Number, default: 1 },
  description: { type: String, default: null },
});

mongoose.model('Actives', Active);
