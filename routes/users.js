var router = require('express').Router();
var userCtrl = require('../controllers/users');


//Get Login Page
router.get('/login', (req, res) => res.render('login'))

// GET /users
router.get('/Users', userCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;