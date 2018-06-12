var passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('user');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function (req, res) {

    var newuser = new User();

    newuser.name = req.body.name;
    newuser.surname = req.body.surname;
    newuser.email = req.body.email;
    newuser.username = req.body.email.split('@')[0];

    
    newuser.setPassword(req.body.password);

    var promise = newuser.save()
    promise.then((dbRes) => {
        console.log("user saved");
        var token;
        token = newuser.generateJwt();
        console.log("ready to response with token");
        res.status(200).json({
            "token": token
        });
    }).catch(function(error) {
        console.error("error while trying to save the new user", error);
        res.status(405).json({
            "msg": "email already registred, please use a different email"
        });
    });

    // newuser.save().then((dbRes) => { console.log('new user is saved to the db') });
};

module.exports.login = function (req, res) {

    if(!req.body.email || !req.body.password) {
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    console.log("log in called:", req.body.email, ": ", req.body.password)
    passport.authenticate('local', function (err, user, info) {
        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        let aUser = user
        if (aUser) {
            // add the token to the aUser in a hard way
            aUser['token'] = aUser.generateJwt();
            console.log(aUser.generateJwt());
            console.log(aUser.token)
            console.log(aUser)
            console.log("stringify aUser:", JSON.stringify(aUser));

            res.status(200);
            res.json(aUser);
        } else {
            // If aUser is not found
            res.status(401).json(info);
        }
    })(req, res);
};