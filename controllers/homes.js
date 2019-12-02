const User = require('../models/user');
const Home = require('../models/homes')
const crypto = require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')

module.exports = {
    index,
    new: newHome,
    addHome,
    delHome,
    search,
    view,
    myHomes,
    editView,
    updateHome,
    addStay
    // addImage
};


// function addImage() {
// }

function myHomes(req, res) {
    Home.find({ createdBy: req.params.id }, (err, homes) => {
        User.findById(req.params.id, (err, user) => {
            res.render('Homes/myHomes', {
                homes,
                user
            })
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
            user: req.user
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

function delHome(req, res) {
    Home.findByIdAndDelete(req.params.id, (err, home) => {
        if (err) { console.log(err); return; }
        res.redirect(`/Homes/${home.createdBy}/myHomes`);
    })
}

function editView(req, res) {
    Home.findById(req.params.id, (err, home) => {
        if (err) { console.log(err); return; }
        res.render(`Homes/edit`, {
            title: 'Edit Home View',
            home,
            user: home.createdBy
        })
    })
}

function updateHome(req, res) {
    Home.findByIdAndUpdate(req.params.id, req.body, (err, home) => {
        if (err) { console.log(err); return; }
        res.redirect(`/Homes/${home.createdBy}/myHomes`)
    })
}

function view(req, res) {
    Home.findById(req.params.id, (err, home) => {
        console.log(home.createdBy);
        User.findById(home.createdBy, (err, user) => {
            res.render('Homes/viewHome', {
                title: 'Detail',
                home,
                user: req.user
            });
        });
    });
}

function addStay(req, res) {
    User.findById(req.params.id, (err, user) => {
        let home = new Home(req.body);
        home.createdBy = req.params.id;
        home.save((err) => {
            res.redirect('/Homes');
        });
    });
}