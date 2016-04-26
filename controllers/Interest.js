'use strict';

var url = require('url');


var Interest = require('./InterestService');


module.exports.interestsGET = function interestsGET (req, res, next) {
  Interest.interestsGET(req.swagger.params, res, next);
};

module.exports.interestsPOST = function interestsPOST (req, res, next) {
  Interest.interestsPOST(req.swagger.params, res, next);
};
