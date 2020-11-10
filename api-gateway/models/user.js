/*
============================================
; Title: user.js
; Author: Professor Krasso
; Date:   21 October 2020
; Modified by: Marie Nicole Barleta
; Description: File for the User database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
let UserSchema = new Schema({
  username: String,
  password: String,
  email: String
});
var User = mongoose.model('User', UserSchema)

// Export the model so its publicly available.
module.exports = User;

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};

