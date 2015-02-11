'use strict';

var users = require('../../app/controllers/users.server.controller.js'),
  categories = require('../../app/controllers/categories.server.controller.js');

module.exports = function(app) {
  app.route('/api/categories')
    .get(categories.list)
    .post(users.requiresLogin, users.hasAuthorization(['admin']), categories.create);

  app.route('/api/categories/:categoryId')
    .get(categories.read)
    .put(users.requiresLogin, users.hasAuthorization(['admin']), categories.update)
    .delete(users.hasAuthorization(['admin']), categories.delete);

  app.param('categoryId', categories.categoryByID);
};