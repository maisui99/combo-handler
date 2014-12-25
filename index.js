var handle = require('./lib/handle');

module.exports = function (config) {
  return function (req, res, next) {
    handle(config, req, res)(function (err, content) {
      if (content) {
        res.send(content);
      } else {
        next();
      }
    });
  }
};
