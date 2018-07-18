const passport = require('passport')
    , url = require('url')
    , TwitterStrategy = require('passport-twitter').Strategy
    , config = require('../../config/config.server.config')
    , userCtrl = require('../../controller/user.server.controller');

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.clientID,
        consumerSecret: config.twitter.clientSecret,
        callbackURL: config.twitter.callbackURL,
        passReqToCallback: true
    }, (req, token, tokenSecret, profile, done) => {
        const providerData = profile._json;
        providerData.token = token;
        providerData.tokenSecret = tokenSecret;

        const providerUserProfile = {
            fullName: profile.displayName,
            username: profile.username,
            provider: 'twitter',
            providerId: profile.id,
            providerData: providerData
        };

        userCtrl.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
}
