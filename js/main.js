require.config({
  baseUrl: 'js',
  paths: {
    //backbone: 'vendor/backbone-1.0.0.min',
    jquery: 'vendor/jquery-2.0.3.min',
    underscore : 'vendor/underscore-1.5.1.min'
  },
  shim: {
    //backbone: {
    //  deps: ['jquery', 'underscore'],
    //  exports: 'Backbone'
    //},
    underscore: {
      exports: '_'
    }
  }
});

require(['jquery'], function($) {
  $(function() {
    alert('Welcome to Memoja!');
  });
});

