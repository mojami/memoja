define(['backbone', 'Memo'], function(Backbone, Memo) {
    'use strict';

    var MemoView = Backbone.View.extend({
        initialize: function() {
            $('#mainContainer').append(this.el);
            this.template = _.template($('#templateShowMemo').html());
            this.listenTo(this.model, 'change', this.render);
            // Get content from the server.
            this.model.fetch();
        },

        render: function() {
            var data = {
                title: this.model.get('title'),
                content: this.model.get('content'),
                created: this.model.get('created'),
                updated: this.model.get('updated')
            };
            this.$el.html(this.template(data));
            return this;
        }
    });

    return MemoView;
});
