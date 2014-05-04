var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/memojadb';

// If we cannot connect to the mongo DB, the process exits.
mongoose.connection.on('error', function (err) {
    console.log('ERROR: Failed to connect to MongoDB');
    console.log('ERROR:', err.message);
    process.exit(1);
});

// Connect to the DB.
mongoose.connect(DB_URL);

// Create 'Memo' model.
var MemoSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
var Memo = mongoose.model('Memo', MemoSchema);

// Create 'Tag' model.
var TagSchema = new mongoose.Schema({
    name: String
});
var Tag = mongoose.model('Tag', TagSchema);

// Create sample data if there is no data in DB.
//Memo.remove({}, function (err, count) {
    Memo.count(function (err, count) {
        if (count > 0) { return; }
        Memo.create({title: 'Title 1', content: 'Content 1', tags:['TagA', 'TagB']}, function() {});
        Memo.create({title: 'Title 2', content: 'Content 2', tags:['TagB', 'TagC']}, function() {});
        Memo.create({title: 'Title 3', content: 'Content 3', tags:['TagC', 'TagA']}, function() {});
    });
//});
//Tag.remove({}, function (err, count) {
    Tag.count(function (err, count) {
        if (count > 0) { return; }
        Tag.create({name: 'Tag A'});
        Tag.create({name: 'Tag B'});
        Tag.create({name: 'Tag C'});
        Tag.create({name: 'Tag D'});
    });
//});

// Export interfaces.
exports.Memo = Memo;
exports.Tag = Tag;
