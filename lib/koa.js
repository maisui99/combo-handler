var handle = require('./handle');
module.exports = function (config) {
  return function *(next) {
    var content = yield handle(config, this.request, this.response);
    if (content) {
      this.body = content;
    } else {
      yield *next;
    }
  }
};