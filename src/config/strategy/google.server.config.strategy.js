const passport = require('passport')
    , url = require('url')
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    , config = require('../../config/config.server.config')
    , userCtrl = require('../../controller/user.server.controller');

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL,
        passReqToCallback: true
    }, (req, accessToken, refreshToken, profile, done) => {
        const providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;

        const providerUserProfile = {
            firstName: profile.name.giveName,
            lastName: profile.name.familyName,
            fullName: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
            provider: 'google',
            providerId: profile.id,
            providerData: providerData
        };

        userCtrl.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};