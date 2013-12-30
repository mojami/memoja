var express = require('express');
var path = require('path');
var app = express();

// App settings.
app.set('port', 3000);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Start the server.
app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});

// Routes ==================================================
app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/create', function(req, res) {
    res.render('create');
});

// Web APIs ================================================
app.get('/api/memos', function(req, res) {
    res.json([{title:'Title1'}, {title:'Title2'}]);
});

app.post('/api/memos', function(req, res) {
    // TODO: create a memo
    res.redirect('/');
});

