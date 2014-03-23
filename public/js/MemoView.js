define(['backbone', 'Memo'], function(Backbone, Memo) {
    'use strict';

    var MemoView = Backbone.View.extend({
        el: '#memoView',

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            // TODO: this.stopListening()

            // Get content from the server.
            this.model.fetch();
        },

        render: function() {
            var title = this.model.get('title');
            var content = this.model.get('content');
            var created = this.model.get('created');
            var updated = this.model.get('updated');
            var str = '<b>Title: </b>' + title +
                '<br><b>Content: </b>' + content +
                '<br><b>Created: </b>' + created +
                '<br><b>Updated: </b>' + updated;
            this.$el.html(str);
            return this;
        }
    });

    return MemoView;
});
