'use strict';

module.exports = function (app) {

    var users = require('../controllers/users');

    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_a_user);

    app.route('/users/:userId')
        .get(users.find_a_user)
        .put(users.update_a_user)
        .delete(users.delete_a_user);

    app.route('/login')
        .post(users.login);

};