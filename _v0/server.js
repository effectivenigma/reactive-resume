var fs = require('fs');
var path = require('path');
var express = require('express');

// init express app
var app = express();

// set app config
app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(path.join(__dirname, 'build')));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest data.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});