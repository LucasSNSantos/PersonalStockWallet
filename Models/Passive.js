const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Passive = new Schema({
  ID_user: { type: Number, required: true },
  ID_passive: { type: Number, required: true },
  monthly_cost: { type: Number, required: true },
  billing_day: { type: Date, required: true },
  isNeed: { type: Boolean, required: true, default: false },
});

mongoose.model('Passives', Passive);
