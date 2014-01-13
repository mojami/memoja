define(['backbone'], function(Backbone) {
    var Memo = Backbone.Model.extend({
        urlRoot: '/api/memos',
        defaults: {
            id: 'AAAAAAAAAA',  // TODO: create random ID
            title: 'Untitled memo',
            content: '',
            created: new Date()
        }
    });

    return Memo;
});
