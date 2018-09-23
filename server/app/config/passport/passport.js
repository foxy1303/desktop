module.exports = function (passport) {

    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function (user, done) {
        //console.log('SER USER',user,'DONE',done,'END');
        done(null, user);

    });

    // deserialize user
    passport.deserializeUser(function (user, done) {

        var filter = `?filter[where][id]=${user.id}`;
            var url = `http://localhost:3000/api/employees/findOne${filter}`;
            var request = new Request(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetch(request)
                .then(response => {
                    response = response.json();
                    return response;
                })
        .then(function (_user) {

            if (_user) {
                done(null, _user.get());

            } else {

                done(_user.errors, null);

            }

        });

    });


    passport.use('local-signin', new LocalStrategy(

        {

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, password, done) {


            var isValidPassword = function (userpass, password) {

                return password == userpass ? true : false;

            }

            var filter = `?filter[where][email]=${email}`;
            var url = `http://localhost:3000/api/employees/findOne${filter}`;
            var request = new Request(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetch(request)
                .then(response => {
                    response = response.json();
                    return response;
                })
                .then(user => {

                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));

}