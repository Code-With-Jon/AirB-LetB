const User = require('../models/user');

module.exports = {
    index,
    addHome,
    delHome
};

function index(req, res, next) {
    console.log(req.query)
    res.render('/')

}

function addHome(req, res, next) {
    res.render('/')
}

function delHome(req, res, next) {
    res.render('/')
}