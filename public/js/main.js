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

require(['jquery', 'Memo', 'MemojaApi'], function($, Memo, MemojaApi) {
  'use strict';
  $(function() {
    MemojaApi.getMemoList(function(memos) {
      updateMemoList(memos);
    });

    var memo = new Memo();
    memo.fetch({
        success: function() { console.log(memo); }
    });
  });

  function updateMemoList(memos) {
    var $memoList = $('#memoList');
    memos.forEach(function(memo) {
      $memoList.append('<li>' + memo.title + ' (' + memo.created + ')');
    });
  }
});

