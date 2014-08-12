# combo-handler

a middleware to handle combo url

## example

``` javascript
var app = require('express')();
var comboHandler = require('comboHandler');
app.use('/',comboHandler({
    base: '/assets/'
}));
app.listen(80);
```

navigate to http://localhost/??1.js,2.js will output combined file content from /assets/1.js and /assets/2.js

