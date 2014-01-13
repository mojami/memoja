define(['backbone'], function(Backbone) {
    var Memo = Backbone.Model.extend({
        urlRoot: '/api/memos',
        defaults: {
            id: 'AAAAAAAAAA',
            title: 'Untitled memo',
            content: '',
            created: new Date()
        }
    });

    return Memo;
});
