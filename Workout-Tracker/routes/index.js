const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate (
  'google',
  { scope: ['profile', 'email'] }
));

module.exports = router;
