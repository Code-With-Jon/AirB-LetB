const User = require('../models/user');
const Home = require('../models/homes')

module.exports = {
    index,
    new: newHome,
    addHome,
    delHome,
    search,
    view,
    myHomes
};

function myHomes(req, res) {
    Home.find({ createdBy: req.params.id }, (err, homes) => {
        res.render('Homes/myHomes', {
            homes
        })
    })
}

function index(req, res) {
    Home.find({}, (err, homes) => {
        res.render('Homes/index', {
            user: req.user,
            homes,
            title: 'Homes'
        })
    })
}

function search(req, res, next) {
    let modelQuery = req.query.city ? { name: new RegExp(req.query.city, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'city';
    User.homes.find(modelQuery)
        .sort(sortKey).exec(function (err, homes) {
            if (err) return next(err);
            // Passing search values, name & sortKey, for use in the EJS
            res.render('Homes/index', {
                user: req.user,
                city: req.query.city,
                sortKey
            });
        });
}

function newHome(req, res) {
    User.findById(req.params.id, (err, user) => {
        res.render('Homes/addHome', {
            user
        })
    });
}


function addHome(req, res) {
    User.findById(req.params.id, (err, user) => {
        let home = new Home(req.body);
        home.createdBy = req.params.id;
        home.save((err) => {
            res.redirect('/Homes');
        });
    });
}

function delHome(req, res, next) {
    res.render('/')
}

function view(req, res) {
    Home.findById(req.params.id, (err, home) => {
        console.log(home.createdBy);
        User.findById(home.createdBy, (err, user) => {
            res.render('Homes/viewHome', {
                title: 'Detail',
                home,
                user
            });
        });
    });
}