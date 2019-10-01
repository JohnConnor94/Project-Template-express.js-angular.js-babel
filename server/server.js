const port = 3000;
var path = require('path');
var express = require('express');
var app = express();


// app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../dist')));

// serving the index.html for each route
app.get('*', function (req, res) {
    res.sendFile('index.html');
});

// turn on the server
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
})