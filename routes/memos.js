/**
 * A route definition for /memos.
 */
var memojadb = require('../lib/memojadb');

// CREATE
exports.createMemo = function (req, res) {
    var memo = req.body;
    memojadb.Memo.create(memo, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'A new memo has been created'});
    });
};

// READ (all)
exports.readAllMemos = function (req, res) {
    memojadb.Memo.find(function (err, memos) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json(memos);
    });
};

// READ (one)
exports.readMemo = function (req, res) {
    var id = req.params.id;
    memojadb.Memo.findById(id, function (err, memo) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json(memo);
    });
};

// UPDATE
exports.updateMemo = function (req, res) {
    var id = req.params.id;
    var memo = req.body;
    memojadb.Memo.findByIdAndUpdate(id, memo, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The memo has been updated'});
    });
};

// DELETE
exports.deleteMemo = function (req, res) {
    var id = req.params.id;
    memojadb.Memo.findOneAndRemove({_id: id}, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The memo has been deleted'});
    });
};

// SEARCH
exports.searchMemo = function (req, res, next) {
    var keyword = req.query['s'];
    if (keyword) {
        res.send('SEARCH API (not implemented): ' + keyword);
        return;
    }
    next();
};
