/**
 * A route definition for /memos.
 */
var memojadb = require('../memojadb');

// CREATE
exports.createMemo = function (req, res) {
    console.log('[API] Memo.createMemo');
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
    console.log('[API] Memo.readAllMemos');
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
    console.log('[API] Memo.readMemo:', id);
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
    console.log('[API] Memo.updateMemo:', id);
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
    console.log('[API] Memo.deleteMemo:', id);
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
    console.log('[API] Memo.searchMemo:', keyword);
    if (keyword) {
        var pattern = new RegExp(keyword, 'i');
        memojadb.Memo.find({$or: [ {title: pattern}, {content: pattern} ]},
                function (err, memos) {
            if (err) {
                res.json({error: err.message});
                return;
            }
            res.json(memos);
        });
        return;
    }
    next();
};
