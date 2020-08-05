const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const user = require('./Routes/users');
const handlebars = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const path = require('path');

const app = express();
const PORT = 8787;

//config middlewares

//config Sessions
app.use(
  session({
    secret: 'keyDaSession',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// app.use((req, res, next) => {
//   res.locals.error_msg = console.log('A error has occurred');
//   res.locals.success_msg = console.log('Success operation');
//   next();
// });

// //bodyparser configs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handlebars config
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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

//Config Static Files
app.use(express.static(path.join(__dirname, 'public')));

//nodemailer config

//routes config
app.use('/User', user);

app.get('/', (req, res) => {
  res.send('Main Page of the App');
});

//port config
app.listen(PORT, () => {
  console.log('Server Online on port: ' + PORT);
});
