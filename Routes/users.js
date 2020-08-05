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
  console.log('Sem erros');
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    total_money: 0,
  };
  new User(newUser)
    .save()
    .then(() => {
      console.log('Registrado com Sucesso');
      res.redirect('/User/List');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/User/Add');
    });
});

router.get('/Profile', (req, res) => {
  res.send('User Profile');
});

router.post('/Login', (req, res) => {
  res.send('Login');
  //render login
});

router.get('/List', (req, res) => {
  User.find()
    .sort()
    .lean()
    .then((users) => {
      res.render('user/userslist', { users: users });
      console.log('Users in Database: ' + users);
    });
});

router.get('/', (req, res) => {
  res.send('Main Page of the User');
});

module.exports = router;
