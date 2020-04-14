

$(document).ready(function () {
    $('#open').on('click', function () {
        $('#show').slideToggle(100, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });

    });
    $('#open').click(function () {
        $(this).toggleClass('color_chan');
    });


});