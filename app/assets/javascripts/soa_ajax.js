$(function() {

    var clickTimeout
    var count = 0;

    function createActivity(taskId, visitId) {
        $.ajax({
            url: '/activities/new.js',
            dataType: 'script',
            data: {activity: {task_id: taskId, visit_id: visitId}}
        });
    }

    function updateActivity(id) {
        $.ajax({
            url: '/activities/' + id + '/edit.js',
            dataType: 'script'
        });
    }

    function showDetail(type, id) {
        $.ajax({
            url: '/' + type + '/' + id + '.js',
            dataType: 'script'
        });
    }

    function splitId(element) {
        var id = element.attr('id');
        return id.split('_');
    }

    function clickTableData(element) {
        var split = splitId($(element));
        if (split[0] == 'task') {
            showDetail('tasks', split[1]);
        } else {
            var span = $(element).children('.activity-id')[0];
            if (span) {
                showDetail('activities', $(span).text());
            }
        }
    }

    function clickTableHeader() {
        var split = splitId($(this));

        if (split[0] == 'visit')
            showDetail('visits', split[1]);
    }

    function dblclickTableData() {
        clearTimeout(clickTimeout);
        var split = splitId($(this));
        if (split[0] == 'task')
            return;

        var span = $(this).children('.activity-id')[0];

        if (span) {
            updateActivity($(span).text());
        } else {
            var ids = splitId($(this))
            createActivity(ids[0], ids[1]);
        }
    }

    $('tbody').delegate('td', 'click', function() {
        clearTimeout(clickTimeout);
        var that = this;
        clickTimeout = setTimeout(function() {
            clickTableData(that);
        }, 250);
    });
    $('thead').delegate('th', 'click', clickTableHeader);
    $('tbody').delegate('td', 'dblclick', dblclickTableData);
});