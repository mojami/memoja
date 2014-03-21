var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/memojadb';

// Create 'Memo' model.
var MemoSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

var Memo = mongoose.model('Memo', MemoSchema);

// If we cannot connect to the mongo DB, the process exits.
mongoose.connection.on('error', function (err) {
    console.log('ERROR: Failed to connect to MongoDB');
    console.log('ERROR:', err.message);
    process.exit(1);
});

// Connect to the DB.
mongoose.connect(DB_URL);

// Create sample data if there is no data in DB.
Memo.count(function (err, count) {
    if (count > 0) {
        return;
    }
    Memo.create({title: 'Title 1', content: 'Content 1'}, function() {});
    Memo.create({title: 'Title 2', content: 'Content 2'}, function() {});
    Memo.create({title: 'Title 3', content: 'Content 3'}, function() {});
});

// Export interfaces.
exports.Memo = Memo;
