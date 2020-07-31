const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const user = require('./Routes/users');

const app = express();
const PORT = 8787;

//config middlewares

app.use((req, res, next) => {
  res.locals.error_msg = console.log('A error has occurred');
  res.locals.success_msg = console.log('Successfully');
  next();
});

//mongoose config
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/StockApp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting: ' + err);
  });

//nodemailer config

//routes config
app.use('/User', user);

app.get('/', (req, res) => {
  res.send('Main Page');
});

//port config
app.listen(PORT, () => {
  console.log('Server Online on port: ' + PORT);
});
