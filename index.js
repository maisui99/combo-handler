var fs = require('fs');
var mime = require('mime');
var Path = require('path');

module.exports = function (config) {
    return function (req, res, next) {
        var query = req.query;
        var k;
        var combo = '';
        var path = config.base + req.path;

        for (k in query) {
            if (k.charAt(0) === '?') {
                combo = k;
                break;
            }
        }

        var codes = [];

        if (combo.charAt(0) === '?') {
            var nextQ = combo.slice(1).indexOf('?');
            if (nextQ === -1) {
                nextQ = combo.length;
            } else {
                nextQ++;
            }
            combo = combo.slice(1, nextQ);
            var files = combo.split(',');
            var extname = Path.extname(files[0]) || '.html';
            res.set('content-type', mime.lookup(extname));
            files.forEach(function (f) {
                codes.push(fs.readFileSync(path + f));
            });
            res.send(codes.join('\n'));
        } else {
            next();
        }
    }
};
