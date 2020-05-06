// $('.wrapper').addClass('loaded');

$('.js-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.js-menu-body').toggleClass('active');
    $('.body').toggleClass('lock');
});