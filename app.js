//
// memoja
//
var memos = require('./routes/memos');
var tags = require('./routes/tags');
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
app.get('/create', function(req, res) {
    res.render('create');
});

// Web APIs ================================================
app.post('/api/memos', memos.createMemo);
app.get('/api/memos', memos.searchMemo, memos.readAllMemos);
app.get('/api/memos/:id', memos.readMemo);
app.put('/api/memos/:id', memos.updateMemo);
app.del('/api/memos/:id', memos.deleteMemo);

app.post('/api/tags', tags.createTag);
app.get('/api/tags', tags.readAllTags);
app.put('/api/tags/:id', tags.updateTag);
app.del('/api/tags/:id', tags.deleteTag);
