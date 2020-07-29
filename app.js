const express = require('express');
//const mongoose = require('mongoose');
//const nodemail = require('nodemailer');

const app = express();
const PORTA = 8787;

app.listen(PORTA, () => {
  console.log('Server Online');
});
