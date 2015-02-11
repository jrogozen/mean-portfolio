'use strict';

var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Category = mongoose.model('Category'),
  _ = require('lodash');

exports.create = function(req, res) {
  var category = new Category(req.body);

  category.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(category);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.category);
};

exports.update = function(req, res) {
  var category = req.category;

  category = _.extend(category, req.body);

  category.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(category);
    }
  });
};

exports.delete = function(req, res) {
  var category = req.category;

  category.remove(function(err) {
    if(err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(category);
    }
  });
};

exports.list = function(req, res) {
  Category.find().sort('-created').exec(function(err, categories) {
    if(err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(categories);
    }
  });
};

exports.categoryByID = function(req, res, next, id) {
  Category.findById(id).exec(function(err, category) {
    if(err) return next(err);
    if (!category) return next(new Error('Failed to load category ' + id));
    req.category = category;
    next();
  });
};
