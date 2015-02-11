'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/api/articles')
		.get(articles.list)
		.post(users.requiresLogin, users.hasAuthorization(['admin']), articles.create);

	app.route('/api/articles/:articleId')
		.get(articles.read)
		.put(users.requiresLogin, users.hasAuthorization(['admin']), articles.update)
		.delete(users.hasAuthorization(['admin']), articles.delete);

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};