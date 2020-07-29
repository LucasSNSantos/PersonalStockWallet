const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
  ID_event: { type: Number, required: true },
  money_received: { type: Number, required: true, default: 0 },
  event_description: { type: String },
  event_date: { type: Date, required: true },
});
