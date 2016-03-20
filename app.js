/**
 * Server file
 * @since March 2016
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);

// Using the public folder for static resources
app.use(express.static('public'));

// Use enviroment port or 3000 by default
app.set('PORT', process.env.PORT || 3000);

// Listening on port
http.listen(app.get('PORT'), function(){
    console.log('listening on *:' + app.get('PORT'));
});
