define(['jquery'], function($) {
    var apis = {
        getMemoList: function(callback) {
            $.ajax({
                url: '/api/memos',
                dataType: 'json',
                success: function(json) {
                    callback(json);
                },
                error: function(xhr, stat, err){
                    alert('Error: ' + err.message);
                }
            });
        }
    };
    return apis;
});
