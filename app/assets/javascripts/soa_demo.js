$(function () {
    var $dspNone = $('.dsp-none'),
        $sidebar = $('#sidebar').resizable({ handles: 'e',
                                             minWidth: 150
                                            });
//    $sidebar.height($(window).height() - $sidebar[0].offsetTop);

    $dspNone.fadeIn('fast').removeClass('dsp-none');;
});