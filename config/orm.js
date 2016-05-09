var connection = require('./connection.js');


var orm = {

    allBurgers: function(callback) {
        var s = 'SELECT burger_name FROM burgers ORDER BY time desc';
        connection.query(s, function(err, allBurgersData) {
            if (err) {
                throw err;
            }
            callback(allBurgersData)
        });
    },

    addBurger: function(addBurger, callback) {
        var s = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';
        connection.query(s, [addBurger, false], function(err, result) {
            if (err) {
                throw err;
            }
            callback();
        });
    },

    devourBurger: function(burgerName, callback) {
        var s = 'UPDATE burgers SET devoured=true WHERE burger_name = ?';
        connection.query(s, [burgerName], function(err, result) {
            if (err) {
                throw err;
            }
            callback();
        })
    }
};

module.exports = orm;

