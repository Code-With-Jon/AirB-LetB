var express = require('express')
var router = express.Router()

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

router.get('/', isLoggedIn, (req, res) => {
    res.render('About/index', {
        user: req.user
    })
})

module.exports = router

