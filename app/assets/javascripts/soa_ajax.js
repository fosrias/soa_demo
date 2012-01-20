$(function() {

    function createActivity(taskId, visitId) {
        $.ajax({
            url: '/activities/new.js',
            dataType: 'script',
            data: {activity: {task_id: taskId, visit_id: visitId}},
            success: setDoubleClickHandlers
        });
    };

    function setDoubleClickHandlers() {
        $('td').unbind('dblclick');
        $('td').dblclick(function() {
            id = $(this).attr('id');
            ids = id.split('_');
            createActivity(ids[0], ids[1]);
        });
    };

    setDoubleClickHandlers();
});