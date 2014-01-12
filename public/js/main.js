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

require(['jquery', 'MemojaApi'], function($, MemojaApi) {
  'use strict';
  $(function() {
    MemojaApi.getMemoList(function(memos) {
      updateMemoList(memos);
    });
  });

  function updateMemoList(memos) {
    var $memoList = $('#memoList');
    memos.forEach(function(memo) {
      $memoList.append('<li>' + memo.title + ' (' + memo.created + ')');
    });
  }
});

