$(function () {
    var $dspNone = $('.dsp-none'),
        $sidebar = $('#sidebar').resizable({ handles: 'e',
                                             minWidth: 150
                                            }),
        $sideBarContent =  $('#sidebar-content'),
        sideHeight = $(window).height() - $sidebar[0].offsetTop;
    $sidebar.height(sideHeight + 'px');
    $sideBarContent.height((sideHeight - 52) + 'px');
//    $dspNone.fadeIn('fast').removeClass('dsp-none');;
});