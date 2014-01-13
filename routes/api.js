exports.getMemoList = function(req, res) {
    res.json([
        {
            id: "AAA",
            title: "Title1",
            content: "Content1",
            created: new Date()
        },
        {
            id: "BBB",
            title: "Title2",
            content: "Content2",
            created: new Date()
        },
        {
            id: "CCC",
            title: "Title3",
            content: "Content3",
            created: new Date()
        }
    ]);
};

exports.createMemo = function(req, res) {
    // TODO: create a memo
    res.send('New memo has been created');
};

exports.getMemo = function(req, res) {
    var id = req.params.id;
    res.json({
        id: id,
        title: "タイトル1",
        content: "本文1",
        created: new Date()
    });
};

exports.modifyMemo = function(req, res) {
    // TODO: modify a memo
    res.send('The memo has been modified');
};

exports.deleteMemo = function(req, res) {
    // TODO: delete a memo
    res.send('The memo has been deleted');
};

exports.getTagList = function(req, res) {
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

exports.createTag = function(req, res) {
    // TODO: create a new tag
    res.send('New tag has been created.');
};

exports.modifyTag = function(req, res) {
    // TODO: modify a tag
    res.send('The tag has been modified');
};

exports.deleteTag = function(req, res) {
    // TODO: delete a tag
    res.send('The tag has been deleted');
};

