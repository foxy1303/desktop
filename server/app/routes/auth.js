module.exports = function(app, passport) {
    
    app.post('/login', passport.authenticate('local-signin', {
            successRedirect: '/',

            failureRedirect: '/login'
        }

    )); 
 
}