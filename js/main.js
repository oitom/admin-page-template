$(document).ready(function () {
    // menu collapse
    $('body').on('click', '#menu-collapse', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        return false;
    });



});