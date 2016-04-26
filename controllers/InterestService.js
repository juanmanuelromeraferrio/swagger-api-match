'use strict';

exports.interestsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "interest" : {
    "category" : "aeiou",
    "value" : "aeiou"
  }
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.interestsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * interest (Interest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

