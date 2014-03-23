// CREATE
exports.createTag = function(req, res) {
    // TODO: create a new tag
    res.send('New tag has been created.');
};

// READ (all)
exports.readAllTags = function(req, res) {
    res.json([
        {
            id: 'tag_id1',
            name: 'Tag1'
        },
        {
            id: 'tag_id2',
            name: 'Tag2'
        },
    ]);
};

// UPDATE
exports.updateTag = function(req, res) {
    // TODO: modify a tag
    res.send('The tag has been modified');
};

// DELETE
exports.deleteTag = function(req, res) {
    // TODO: delete a tag
    res.send('The tag has been deleted');
};

