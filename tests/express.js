var app = require('express')();
app.use(require('../')());
var port = 8000;
app.listen(port);
console.log('server started at port: ' + port);