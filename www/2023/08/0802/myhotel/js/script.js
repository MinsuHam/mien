$(document).ready(function(){
   $(".main-nav>li").hover(function(){
      $(this).find(".sub-nav").stop().slideToggle(200);
   });
}); //jquery