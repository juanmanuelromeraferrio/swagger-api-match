'use strict';

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "user" : {
    "name" : "aeiou",
    "alias" : "aeiou",
    "photo" : "aeiou",
    "location" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "id" : "aeiou",
    "interests" : [ {
      "interest" : {
        "category" : "aeiou",
        "value" : "aeiou"
      }
    } ],
    "email" : "aeiou"
  }
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.usersIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.usersIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user" : {
    "name" : "aeiou",
    "alias" : "aeiou",
    "photo" : "aeiou",
    "location" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "id" : "aeiou",
    "interests" : [ {
      "interest" : {
        "category" : "aeiou",
        "value" : "aeiou"
      }
    } ],
    "email" : "aeiou"
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

exports.usersIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user (NewUser)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user" : {
    "name" : "aeiou",
    "alias" : "aeiou",
    "photo" : "aeiou",
    "location" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "id" : "aeiou",
    "interests" : [ {
      "interest" : {
        "category" : "aeiou",
        "value" : "aeiou"
      }
    } ],
    "email" : "aeiou"
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

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (NewUser)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user" : {
    "name" : "aeiou",
    "alias" : "aeiou",
    "photo" : "aeiou",
    "location" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "id" : "aeiou",
    "interests" : [ {
      "interest" : {
        "category" : "aeiou",
        "value" : "aeiou"
      }
    } ],
    "email" : "aeiou"
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

