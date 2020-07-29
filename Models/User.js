const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  ID_user: { type: Number, required: true },
  salary_day: { type: Date, required: true },
  user_email: { type: String, required: true },
  total_money: { type: Number, default: 0 },
});

mongoose.model('Users', User);
