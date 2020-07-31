const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('../Models/User');

const User = mongoose.model('Users');

router.get('/Add', (req, res) => {
  res.render('user/createuser');
});

//Creating a new user
router.post('/Register', (req, res) => {
  var errors = [];

  if (
    !req.body.Email ||
    typeof req.body.Email == null ||
    req.body.Email == null
  ) {
    errors.push({ text: 'Invalid Email' });
  }

  if (
    !req.body.Name ||
    typeof req.body.Name == undefined ||
    req.body.Name == null
  ) {
    erros.push({ texto: 'Invalid Name' });
  }
});

router.get('/Profile', (req, res) => {
  res.send('User Profile');
});

router.get('/List', (req, res) => {
  res.render('user/userslist');
});

router.get('/', (req, res) => {
  res.send('Main Page of the User');
});

module.exports = router;
