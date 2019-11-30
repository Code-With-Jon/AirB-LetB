var router = require('express').Router();
var homeCtrl = require('../controllers/homes');
var user = require('../models/user');
var Home = require('../models/homes');


router.get('/', homeCtrl.index);
//Add Home Page

// router.get('/:id', homeCtrl.index)
router.get('/:id', homeCtrl.new)
router.post('/:id', homeCtrl.addHome);
router.get('/:id/detail', homeCtrl.view)
router.get('/:id/myHomes', homeCtrl.myHomes)


//Add Home Handle
// router.get('/addHome', homeCtrl.index);
// router.get('/:id/', homeCtrl.index);

module.exports = router;
