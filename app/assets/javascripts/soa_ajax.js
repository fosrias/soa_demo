$(function() {

    function createActivity(taskId, visitId) {
        $.ajax({
            url: '/activities/new.js',
            dataType: 'script',
            data: {activity: {task_id: taskId, visit_id: visitId}},
            success: setClickHandlers
        });
    };

    function showDetail(type, id) {
        $.ajax({
            url: '/' + type + '/' + id +'.js',
            dataType: 'script'
        });
    };

    function setClickHandlers() {
        $('td').unbind('dblclick');
//        $('td').unbind('click');
//
//        $('td').click(function() {
//            var span = $(this).children('.activity-id')[0];
//            var type = 'activity'
//            if (span) {
//                if ($(this).class() == 'ui-widget-header task-descriptor') {
//                  type = 'task'
//                } else if ($(this).class() == 'ui-widget-header table-header') {
//                  type = 'visit'
//                }
//                showDetail(type, span.text());
//            };
//        });

        $('td').dblclick(function() {
            var id = $(this).attr('id');
            var ids = id.split('_');
            createActivity(ids[0], ids[1]);
        });
    };

    setClickHandlers();
});