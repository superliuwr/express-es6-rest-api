'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the title'
  },
  url: {
    type: String,
  },
  adImageUrl: {
    type: String,
    required: 'Kindly enter the name of the image'
  },
  description: {
    type: String,
  },
  rate: {
      type: Number,
      default: 0
  },
  category: {
      type: String
  },
  count: {
      type: Number,
      default: 0
  },
  contact: {
    type: String
  },
  enabled: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);