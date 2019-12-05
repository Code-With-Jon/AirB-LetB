var router = require('express').Router();
var homeCtrl = require('../controllers/homes');
var user = require('../models/user');
var Home = require('../models/homes');
// var db = require('../config/database')



router.get('/', homeCtrl.index);
//Add Home Page

// router.get('/:id', homeCtrl.index)
router.get('/:id', isLoggedIn, homeCtrl.new)
router.post('/:id', isLoggedIn, homeCtrl.addHome);
router.get('/:id/detail', isLoggedIn, homeCtrl.view)
router.get('/:id/myHomes', isLoggedIn, homeCtrl.myHomes)
router.delete('/:id', isLoggedIn, homeCtrl.delHome)
router.get('/:id/edit', isLoggedIn, homeCtrl.editView)
router.put('/:id', isLoggedIn, homeCtrl.updateHome)
router.get('/:id/myStays', isLoggedIn, homeCtrl.viewStays)
router.post('/:id/myStays', isLoggedIn, homeCtrl.confirmRental)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

//upload file
// router.post('/upload', upload.single('file'), (req, res) => {
//     res.json({ file: req.file })
// })


//Add Home Handle
// router.get('/addHome', homeCtrl.index);
// router.get('/:id/', homeCtrl.index);

module.exports = router;
