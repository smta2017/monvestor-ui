$('.next').on('click', function() {
    var next = $(this).data('next');
    $(next).trigger("click");
    $('.custom-alert .alert').removeClass('show');

    console.log(next);
});

$('.custom-form .input-uplode .content').on('click', function() {
    $('.custom-form .input-uplode input').trigger("click");
});

$('.custom-form .nav-item:nth-of-type(1),.custom-form .nav-item:nth-of-type(2)').on('click', function() {
    $('.custom-alert .alert').removeClass('show');
});

$('.confirm').on('click', function() {
    $('.custom-alert .alert').toggleClass('show');
});

$('.slider-imgs .thum').on('click', function() {

    var img = $(this).attr('src');
    $('.big-img').attr('src', img);
    $('.slider-imgs .thum').removeClass('active');
    $(this).addClass('active');

});