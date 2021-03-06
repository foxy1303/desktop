var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars'); 
 
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
 
//var userInformation = {};
 
//load passport strategies
 
require('./app/config/passport/passport.js')(passport);
 
app.listen(5000, function(err) {
 
    if (err)
 
        console.log(err)
 
});