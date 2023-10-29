$(function(){
   let n = 0;
   viewSlide(n);

   $('.slide-left').click(function(){
      n--;
      if(n < 0){
         n = 4;
      }
      viewSlide(n);
   });

   $('.slide-right').click(function(){
      n++;
      if(n > 4){
         n = 0;
      }
      viewSlide(n);
   });

   $('.small-list').hover(function(){
      $(this).find('.small-navbox').toggle();
   });

   /** 검색이벤트 */
   $('.search-select').click(function(){
      if($(this).find('.fa-solid').hasClass('fa-angle-down')){
         $(this).find('.fa-solid')
                .removeClass('fa-angle-down')
                .addClass('fa-angle-up');
         $('.select-value').slideDown(100);       
      }else{
         $(this).find('.fa-solid')
                .removeClass('fa-angle-up')
                .addClass('fa-angle-down');
         $('.select-value').slideUp(100);        
      }
   });

   $('.select-value li').click(function(){
      const txt = $(this).text();  //선택한 text 가져옴
      $('.select-value li').removeClass('active');  //li에 모든 active지움
      $(this).addClass('active'); //선택한 부분에 active를 추가
      $('.search-select>span').text(txt);  //span에 가져온 text를 입력
      $('.search-form').focus();
   });

   $('.slider-list li').mouseenter(function(){
       $('.slider-list li').removeClass('active');
       $(this).addClass('active');
   });

   setInterval(autoSlide, 10000);

   $.ajax({
      type: 'GET',
      url: '../data/list.json',
      dataType: 'json',
      success: function(data){
         //console.log(data.list);
         let li="";
         const rs = data.list;
         const lists = rs.filter((item, index) => index < 10);
/*
         for(let i = 0; i < lists.length; i++){
            li += `<li>
                  <a href="#">
                  <div class="d-flex">
                        <div class="img-thumb">
                           <img src="images/list/${lists[i].img}" alt="001" />
                        </div>
                        <p class="pop-num">${i+1}</p>
                        <p class="pop-text">${lists[i].title}</p>
                        <p class="pop-cafe-list">${lists[i].cafename}</p>
                        <span class="pop-comment">${lists[i].comment}</span>
                     </div> 
                  </a>
               </li>`;
         }
*/
      let i = 1;
      for(let item of lists){
         li += `<li>
         <a href="#">
         <div class="d-flex">
               <div class="img-thumb">
                  <img src="images/list/${item.img}" alt="001" />
               </div>
               <p class="pop-num">${i}</p>
               <p class="pop-text">${item.title}</p>
               <p class="pop-cafe-list">${item.cafename}</p>
               <span class="pop-comment">${item.comment}</span>
            </div> 
         </a>
      </li>`;  
      i++;     
      }

         $('.pop-list').html(li);
      },
      error: function(request, status, error){
         console.log(error);
      }
   });


});  //jquery

//자동실행 함수
function autoSlide(){
   let slide = $('.slide-row');
   let index = slide.index($('.zindex'));  //zindex가 위치한 순서를 읽어옴
   if(index == 4){  // 4보다 높으면 0으로 초기화
      n = 0;  
   }else{
      n = index + 1; 
   }
   viewSlide(n); 
}

function viewSlide(n) {
   $('.slide-row').removeClass('zindex');
   $('.slide-row').eq(n).addClass('zindex');
   $('.slider-list>li').css({
      opacity: 0,
      top: '30px',
      position:'relative'
   });

   $('.slider-list>li').animate({
       opacity: 1,
       top: '0px'
   }, 500);
}


