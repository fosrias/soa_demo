$(function () {
    var $sidebar = $('#sidebar').resizable({ minWidth: 150
                                            }),
        $sideBarContent =  $('#sidebar-content'),

        $window = $(window),

        resizeSideBar = function() {
            var  sideHeight = $(window).height() - $sidebar[0].offsetTop;
            $sidebar.height(sideHeight + 'px');
            $sideBarContent.height((sideHeight - 52) + 'px');
        };

     resizeSideBar();

    $window.resize( function () {
        resizeSideBar();
    });
});