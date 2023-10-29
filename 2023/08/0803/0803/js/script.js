$(document).ready(function(){
    $('.btn').click(function(){
        $('.box').animate({
            width: '2000px'
        }, 1000);  
    });


    $('.stop').click(function(){
        $('.box').stop();
    });




});
//jquery