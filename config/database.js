var mongoose = require('mongoose');
// const crypto = require('crypto')
// const multer = require('multer')
// const GridFsStorage = require('multer-gridfs-storage')
// const Grid = require('gridfs-stream')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// let conn = mongoose.createConnection(process.env.DATABASE_URL)
// let gfs;

// conn.once('open', () => {
//     //Set up Stream
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads')
// })

// Create Storage Engine
// var storage = new GridFsStorage({
//     url: process.env.DATABASE_URL,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err)
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo)
//             })
//         })
//     }
// })
// const upload = multer({ storage })



// database connection event
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});


module.exports = mongoose;