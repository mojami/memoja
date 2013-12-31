//
// memoja
//
var api = require('./routes/api');
var express = require('express');
var path = require('path');
var app = express();

// Express app settings.
app.set('port', 3000);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Start the server.
app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});

// Routes ==================================================
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/create', function(req, res) {
    res.render('create');
});

// Web APIs ================================================
app.get('/api/memos', api.getMemoList);
app.post('/api/memos', api.createMemo);

app.get('/api/memos/:id', api.getMemo);
app.put('/api/memos/:id', api.modifyMemo);
app.del('/api/memos/:id', api.deleteMemo);

app.get('/api/tags', api.getTagList);
app.post('/api/tags', api.createTag);

app.put('/api/tags/:id', api.modifyTag);
app.del('/api/tags/:id', api.deleteTag);
