var path = require('path');
var orm = require('../config/orm.js');


module.exports = function(app) {

    app.post('/add', function(request, response) {

        if (request.body.burger_name) {
            orm.addBurger(request.body.burger_name, function() {
                response.redirect('/');
            })
        }
    })

    app.put('/devour', function(request, response) {

        orm.devourBurger(request.body.burgerName, function() {
            response.redirect('/');
        })
    })

}