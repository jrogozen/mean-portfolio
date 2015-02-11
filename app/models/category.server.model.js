'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  visibility: {
    type: Boolean,
    default: true
  }
});

mongoose.model('Category', CategorySchema);