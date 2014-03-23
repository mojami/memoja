define(['backbone', 'Memo', 'MemoView', 'MemoListView'],
function(Backbone, Memo, MemoView, MemoListView) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '': 'showIndex',
            'memos/:id': 'showMemo'
        },
        showIndex: function () {
            new MemoListView();
        },
        showMemo: function (id) {
            var model = new Memo({id: id});
            new MemoView({model: model});
        }
    });
});
