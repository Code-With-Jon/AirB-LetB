var router = require('express').Router();
var homeCtrl = require('../controllers/homes');
var user = require('../models/user');
var Home = require('../models/homes');
// var db = require('../config/database')



router.get('/', homeCtrl.index);
//Add Home Page

// router.get('/:id', homeCtrl.index)
router.get('/:id', homeCtrl.new)
router.post('/:id', homeCtrl.addHome);
router.get('/:id/detail', homeCtrl.view)
router.get('/:id/myHomes', homeCtrl.myHomes)
router.delete('/:id', homeCtrl.delHome)
router.get('/:id/edit', homeCtrl.editView)
router.put('/:id', homeCtrl.updateHome)
router.get('/:id/myStays', homeCtrl.viewStays)
router.post('/:id/myStays', homeCtrl.confirmRental)


//upload file
// router.post('/upload', upload.single('file'), (req, res) => {
//     res.json({ file: req.file })
// })


//Add Home Handle
// router.get('/addHome', homeCtrl.index);
// router.get('/:id/', homeCtrl.index);

module.exports = router;
