const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, required: true },
  salary_day: { type: Date, required: false },
  email: { type: String, required: true },
  total_money: { type: Number, default: 0 },
});

mongoose.model('Users', User);
