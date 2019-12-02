var createError = require('http-errors');
var express = require('express');
var path = require('path');
// const crypto = require('crypto')
// const multer = require('multer')
// const GridFsStorage = require('multer-gridfs-storage')
// const Grid = require('gridfs-stream')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session')
var passport = require('passport')
var methodOverride = require('method-override')

require('dotenv').config();




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homesRouter = require('./routes/homes');
var aboutRouter = require('./routes/about')

var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));


app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Homes', homesRouter);
app.use('/About', aboutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
