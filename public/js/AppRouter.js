define(['backbone', 'Memo', 'MemoView', 'MemoListView', 'CreateView'],
function(Backbone, Memo, MemoView, MemoListView, CreateView) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '': 'showList',
            'show/:id': 'showMemo',
            'create': 'createMemo'
        },
        showList: function () {
            this.changeView(new MemoListView());
        },
        showMemo: function (id) {
            var model = new Memo({id: id});
            this.changeView(new MemoView({model: model}));
        },
        createMemo: function () {
            this.changeView(new CreateView());
        },
        changeView: function(view) {
            // Remove event handlers and dom from the current view.
            if (this.view) {
                this.view.undelegateEvents();
                this.view.remove();
            }
            this.view = view;
        }
    });
});
