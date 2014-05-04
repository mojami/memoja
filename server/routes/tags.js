/**
 * A route definition for /tags.
 */
var memojadb = require('../memojadb');

// CREATE
exports.createTag = function (req, res) {
    console.log('[API] Tag.createTag');
    var tag = req.body;
    memojadb.Tag.create(tag, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'A new tag has been created'});
    });
};

// READ (all)
exports.readAllTags = function (req, res) {
    console.log('[API] Tag.readAllTags');
    memojadb.Tag.find(function (err, tags) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json(tags);
    });
};

// UPDATE
exports.updateTag = function (req, res) {
    var id = req.params.id;
    var tag = req.body;
    console.log('[API] Tag.updateTag:', id);
    memojadb.Tag.findByIdAndUpdate(id, tag, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The tag has been updated'});
    });
};

// DELETE
exports.deleteTag = function (req, res) {
    var id = req.params.id;
    console.log('[API] Tag.deleteTag:', id);
    memojadb.Tag.findOneAndRemove({_id: id}, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The tag has been deleted'});
    });
};
