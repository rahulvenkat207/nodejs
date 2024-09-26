var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();

// SSL options for HTTPS secure socket layer
var options = {};
try {
    options = {
        key: fs.readFileSync('ssl/server.key'),
        cert: fs.readFileSync('ssl/server.crt')
    };
} catch (error) {
    console.error('Error reading SSL files:', error);
    process.exit(1); // Exit if SSL files are missing or cannot be read
}

// Start HTTP server on port 80

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

app.get('/', function(req, res){
  res.send('Hello from Express');
     });

