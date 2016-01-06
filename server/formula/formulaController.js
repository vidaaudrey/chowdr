var db = require('../recipeData.js');
var request = require('request');
var url = require('url');
var apiInfo = require('../recipes/apiKeys.js');

module.exports = {
  getFormula: function(req, res, next) {
    var YUMMLY_API_ID = process.env.YUMMLY_API_ID || apiInfo.API_ID;
    var YUMMLY_API_KEY = process.env.YUMMLY_API_KEY || apiInfo.API_KEY;
    var params = url.parse(req.url).path;


    if (params) {
      var apiURL = 'http://api.yummly.com/v1/api/recipe' + params + '?_app_id=' + YUMMLY_API_ID + '&_app_key=' + YUMMLY_API_KEY;

      request(apiURL, function(err, response, body) {
        if (err) {
          res.status(401).send();
          next(err);
        } else {
          res.json(body);
        }
      });
    } else {
      res.status(200);
      res.json(JSON.stringify(db));
    }
  }
};
