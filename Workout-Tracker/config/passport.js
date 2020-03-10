require('./config/database');
require('./config/passport');

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/user');

passport.use(new GoogleStrategy ({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (acessToken, refreshToken, profile, cb) {
        User.findOne({ 'googleId': profile.id }, function(err, user) {
            if (err) return cb (err);
            if (student) {
                return cb(null, student);
            } else {
                const newUser = new User ({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb (err);
                    return cb (null, newUser);
                });
            }
        });
    }
));