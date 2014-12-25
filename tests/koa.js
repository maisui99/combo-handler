var app = require('koa')();
app.use(require('../lib/koa')());
var port = 8000;
app.listen(port);
console.log('server started at port: ' + port);