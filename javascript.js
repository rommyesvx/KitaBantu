$(function () {
    var top = $('#side-bar').offset().top - parseFloat($('#side-bar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#section7').offset().top - parseFloat($('#section7').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#side-bar').outerHeight();

    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                $('#side-bar').addClass('fixed').removeAttr('style');
            } else {
                $('#side-bar').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#side-bar').removeClass('fixed');
        }
    });
});

function toggleIcon(event) {
    const icon = event.target;
    const likeCount = icon.nextElementSibling;

    icon.classList.toggle('active');

    if (icon.classList.contains('active')) {
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        likeCount.textContent++;
    } else {
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        likeCount.textContent--;
    }
}   