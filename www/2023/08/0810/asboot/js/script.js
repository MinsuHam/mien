$(function(){
    const pointSize = $(".circle").width();
    $(".container_fluid").mousemove(function(e){
        $('.circle').css('top', e.pageY - pointSize)
                    .css('left', e.pageX - pointSize);
        $('.circle').fadeIn();
    });

    $(".container_fluid").on("mouseleave", function(){
        $('.circle').fadeOut();
    });         
});
// const circle = document.querySelector(".circle");
// document.addEventListener("mousemove", function(e){
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     circle.style.left = mouseX + 'px';
//     circle.style.top = mouseY + 'px';
// });
