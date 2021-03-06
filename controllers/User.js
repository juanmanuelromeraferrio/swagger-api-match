'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.usersGET = function usersGET (req, res, next) {
  User.usersGET(req.swagger.params, res, next);
};

module.exports.usersIdDELETE = function usersIdDELETE (req, res, next) {
  User.usersIdDELETE(req.swagger.params, res, next);
};

module.exports.usersIdGET = function usersIdGET (req, res, next) {
  User.usersIdGET(req.swagger.params, res, next);
};

module.exports.usersIdPUT = function usersIdPUT (req, res, next) {
  User.usersIdPUT(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  User.usersPOST(req.swagger.params, res, next);
};
