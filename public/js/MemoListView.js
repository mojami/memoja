define(['backbone', 'MemoCollection'], function(Backbone, MemoCollection) {
    'use strict';
    var MemoListView = Backbone.View.extend({
        el: '#memoList',

        initialize: function() {
            this.collection = new MemoCollection();
            this.collection.on('sync', this.render, this);
            this.collection.fetch();
        },

        render: function() {
            var self = this;
            this.collection.forEach(function(memo) {
                self.$el.append('<li>' + memo.get('title') + ' (' + memo.get('created') + ')');
            });
            return this;
        }
    });

    return MemoListView;
});
