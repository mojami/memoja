require.config({
    baseUrl: 'js',
    paths: {
        backbone: 'vendor/backbone-1.1.0',
        jquery: 'vendor/jquery-2.0.3.min',
        underscore : 'vendor/underscore-1.5.2.min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['jquery', 'AppRouter'], function($, AppRouter) {
    'use strict';

    $(function() {
        new AppRouter();
        Backbone.history.start();
    });
});

