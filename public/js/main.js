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

require(['jquery', 'Memo', 'MemojaApi', 'MemoView'],
    function($, Memo, MemojaApi, MemoView) {
  'use strict';
  $(function() {
    MemojaApi.getMemoList(function(memos) {
      updateMemoList(memos);
    });

    new MemoView();
  });

  function updateMemoList(memos) {
    var $memoList = $('#memoList');
    memos.forEach(function(memo) {
      $memoList.append('<li>' + memo.title + ' (' + memo.created + ')');
    });
  }
});

