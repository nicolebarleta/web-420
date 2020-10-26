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
  username: {type: String, required: true },
  password: {type: String, required: true },
  email: {type: String, required: true}
});
var User = mongoose.model('User', UserSchema)

// Export the model so its publicly available.
module.exports = User;
