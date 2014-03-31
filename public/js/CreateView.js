define(['backbone', 'underscore'], function (Backbone, _) {
    'use strict';

    return Backbone.View.extend({
        initialize: function() {
            $('#mainContainer').append(this.el);
            this.template = _.template($('#templateCreateMemo').html());
            this.render();
        },
        render: function() {
            this.$el.append(this.template());
        }
    });
});
