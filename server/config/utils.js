var jwt = require('jwt-simple');
var fs = require('fs');

module.exports = {
  logError: function (err, req, res, next) {
    console.error(err.stack);
    next(err);
  },
  handleError: function (err, req, res) {
    res.status(500).send({ error: err.message });
  },
  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;

    if (!token) {
      return res.status(403).send();
    }
    try {
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }
  },
  handleApiKeys: function (filePath) {
    try {
      fs.accessSync(filePath, fs.F_OK);
      console.log('Searching for ' + filePath)
    } catch (error) {
      console.log('Check API keys in apiKeys.js');
      return null;
    }

    console.log('Found ' + filePath)
    return require(filePath);
  }
};
