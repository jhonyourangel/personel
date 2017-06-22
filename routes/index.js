var express = require('express');
var router = express.Router();
var Role = require('../app/models/role.js');
var User = require('../app/models/user.js');

//var yt_dl = require('./youtube_dl.js');

//download.download();
//yt_dl.youtube_dl();

/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = router;

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    //console.log(passport.authenticate('local-login', {}))
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile2.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    app.get('/profile/user', isLoggedIn, function(req, res) {
        Role.findOne({ "role": req.user.role }, "links role", function(err, role) {
            console.log(err, role);
            res.json({ err, role });
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    //***************** dinamic RESTfull *******/
    app.get('/profile/:name', function(req, res) {
        console.log(req.params.name);
        if (req.params.name === "all") {
            User.find({}, "", function(err, user) {
                console.log(err, user);
                res.json({ err, user });
            });
        } else {
            User.findOne({ "personalInfo.name": req.params.name }, "personalInfo", function(err, user) {
                console.log(err, user);
                res.json({ err, user });
            });
        }
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
