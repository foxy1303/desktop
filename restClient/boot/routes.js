/*'use strict';

module.exports = (app) => {
    const router = app.loopback.Router();
    router.get('*', function(req, res) {
 
        if (localStorage.getItem('username') == null)
         
            res.redirect('/login');
     
    });

    app.use(router);
};*/