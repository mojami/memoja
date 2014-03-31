define(['backbone', 'MemoCollection'], function(Backbone, MemoCollection) {
    'use strict';

    function createListHtml(memo) {
        var str = '<li><a href="#show/' + memo.get('_id') + '">' +
                memo.get('title') + ' (' + memo.get('created') + ')</a></li>';
        return str;
    }

    var MemoListView = Backbone.View.extend({
        initialize: function() {
            $('#mainContainer').append(this.el);
            this.collection = new MemoCollection();
            this.collection.on('sync', this.render, this);
            this.collection.fetch();
        },

        render: function() {
            var self = this;
            self.$el.append('<h3>MemoListView</h3>');
            this.collection.forEach(function(memo) {
                self.$el.append(createListHtml(memo));
            });
            return this;
        }
    });

    return MemoListView;
});
