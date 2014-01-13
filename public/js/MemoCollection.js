define(['backbone', 'Memo'], function(Backbone, Memo) {
    var MemoCollection = Backbone.Collection.extend({
        model: Memo,
        url: Memo.prototype.urlRoot,
    });

    return MemoCollection;
});
