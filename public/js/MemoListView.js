define(['backbone', 'MemoCollection'], function(Backbone, MemoCollection) {
    'use strict';

    function createListHtml(memo) {
        var str = '<li><a href="#memos/' + memo.get('_id') + '">' +
                memo.get('title') + ' (' + memo.get('created') + ')</a></li>';
        return str;
    }

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
                self.$el.append(createListHtml(memo));
            });
            return this;
        }
    });

    return MemoListView;
});
