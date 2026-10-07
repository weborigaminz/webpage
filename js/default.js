// Mobile Menu function
$(document).ready(function () {

    $('.mobile-burger').click(function () {
        $('.desktop-nav').slideToggle('fast'); // Smoothly opens/closes the menu
    });

    $('#monthlyhosting').click(function () {
        $('#starterhosting .price').text('29.95');
        $('#businesshosting .price').text('44.95');
        $('#growthhosting .price').text('59.95');
        $('#monthlyhosting').removeClass('inline-style-081').addClass('inline-style-080');
        $('#annualhosting').removeClass('inline-style-080').addClass('inline-style-081');
    });

    $('#annualhosting').click(function () {
        $('#starterhosting .price').text('299');
        $('#businesshosting .price').text('449');
        $('#growthhosting .price').text('599');
        $('#annualhosting').removeClass('inline-style-081').addClass('inline-style-080');
        $('#monthlyhosting').removeClass('inline-style-080').addClass('inline-style-081');
    });

});
