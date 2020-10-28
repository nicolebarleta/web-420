/*
============================================
; Title:  Assignment 1.4
; Author: Professor Krasso
; Date: 19 October 2020
; Modified By: Marie Nicole Barleta
; Description:  API Gateway Part I
;===========================================
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'API Gateway'
  });
});

module.exports = router;
