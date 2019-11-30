var router = require('express').Router();
var passport = require('passport');
var homeCtrl = require('../controllers/homes');
var Home = require('../models/homes')


// The root route renders our only view
router.get('/', (req, res) => {
  Home.find({}, (err, homes) => {
    res.render('index', {
      title: 'AirBnLetB',
      user: req.user,
      homes
    });
  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/Homes',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;