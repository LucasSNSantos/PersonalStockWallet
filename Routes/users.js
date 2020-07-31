const express = require('express');
const mongoose = require('mongoose');
const { route } = require('../../Desktop/ProjetoExpress/Routes/admin');
const router = express.Router();
require('../Models/User');

const User = mongoose.model('Users');

// router.post('/Add', (req, res) => {
//   res.send('User creation');
// });

router.get('/Profile', (req, res) => {
  res.send('User Profile');
});

router.get('/List', (req, res) => {
  res.send('Users list');
});

router.get('/', (req, res) => {
  res.send('Main Page of the User');
});

module.exports = router;
