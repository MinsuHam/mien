$(document).on("pagecreate", function(){
   const isAuthorized = localStorage.getItem("isAuthorized");
   //console.log(isAuthorized);
   if(isAuthorized != 'authorized'){
       alert("회원전용 페이지 입니다. 로그인해 주세요.");
       window.location.href="login.html";
   }
   const params = new URLSearchParams(document.location.search);
   const fid = params.get("foodId");

   let wishStorage = JSON.parse(localStorage.getItem("wishItems"));
   let cartStorage = JSON.parse(localStorage.getItem("cartItems"));


   //////////////// wish
   if(wishStorage.length > 0) {
      let li = "";
      wishStorage.forEach((list)=> {
         li += `
            <li class="mywhishList">
               <a href="main.html?foodId=${list.foodId}">
                  <img src="${list.foodImg}">
                  <h2>${list.title}</h2>
                  <p>${list.desc} <span>(${list.price})</span></p>
               </a>
            </li>
         `;
      });
      $('#wishlist').html(li);
   }



   //////////////// cart
   if(cartStorage.length > 0) {
      let li = "";
      cartStorage.forEach((list)=> {
         li += `
            <li class="mycartList">
               <a href="main.html?foodId=${list.foodId}">
                  <img src="${list.foodImg}">
                  <h2>${list.title}</h2>
                  <span>(${list.price})</span>
                  <div class="cartBox">
                     <span class="totalCart">총액</span>
                     <span class="cartdown"><i class="ri-arrow-down-s-line"></i></span>
                     <input type="number" class="count-cart" readonly value="1">
                     <span class="cartup"><i class="ri-arrow-up-s-line"></i></span>
                  </div>
                  <input type="hidden" id="price" name="price" value="10000">
                  <input type="hidden" id="total-price" name="total-cart" value="30000">
            </li>
         `;
      });
      $('#cartlist').html(li);
   }


   let cartprice = parseInt($("#price").val());  //최초 상품 가격
   let carttotalprice = parseInt($("#price").val());  // 총 상품가격 변수 선언
   
      $('.cartdown').click(function(){  //수량 다운버튼
          let ct = $('.count-cart').val();  //현재 수량을 가져옴
          if(ct > 1) {  //수량이 1보다 작을 경우 버튼 무시
             ct--; //현재 수량에서 1을 뺌
             $('.count-cart').val(ct);  //1을 뺀수를 저장
             carttotalprice = cartprice * ct;  //가격에 수량을 더함 
            $('#total-price').val(carttotalprice); 
            $('.totalCart').text(carttotalprice.toLocaleString() + "원");   
         }
      });

      $('.cartup').click(function(){
         let ct = $('.count-cart').val();
         ct++;
         $('.count-cart').val(ct);
         carttotalprice = cartprice * ct;
         $('#total-cart').val(carttotalprice);
         $('.totalCart').text(carttotalprice.toLocaleString() + "원");    
      });
  

//////////////////////////////////////////////////////////////////////////////////////////

   if(cartStorage.length > 0) {

   }

   $.ajax({
      type: "get",
      dataType: 'JSON',
      url: '../data/list.json',
      success: function(data){
         const rs = data.filter((list) => list.foodId == fid );
         console.log(rs);
         const result = rs[0];
         $('.food-title').text(result.foodTitle);
         $('.food-description, .opt').text(result.foodDescription);
         $('#food-img').attr("src", result.detailUrl);
         $('.opt-price').text(result.foodPrice.toLocaleString()+"원");
         let options = '';
         for(let i=0; i < result.foodToppimg.length; i++) {
            options += `<div class="ul-topping-box">
                           <div class="topping"
                                 style="background-image:url('assets/img/Home/${result.foodToppimg[i].img}.png');"
                                 data-optionprice="${result.foodToppimg[i].toppingPrice}"
                                 data-option="${result.foodToppimg[i].toppingName}">
                              <p>${result.foodToppimg[i].toppingName}</p>
                              <p>${result.foodToppimg[i].toppingPrice.toLocaleString()}원</p>
                           </div>
                        </div>`;
         }

            $('.ul-topping').html(options); 
            $('#foodId').val(fid);
            $('#price').val(result.foodPrice);
            $('#option-price').val(result.foodPrice);
            $('#total-price').val(result.foodPrice);

          //input
          $('.total').text(result.foodPrice.toLocaleString()+"원");
      },
      error: function(){
        console.log("에러");
      },
      complete: function(){
         myoption();
         optionSlick.not('.slick-initialized').slick(slicks);
      }
   });

   $(document).on("pagebeforechange", function(){
      distorySlick();
      optionSlick.slick("refresh");
   });

   $('#logout').click(function(){
      storageClear();
   });

   var optionSlick = $('.ul-topping');
   var slicks = {
      infinite: true,
      slidesToShow: 3,
      dots: false,
      arrows: false 
   }


   //distorySlick();
   // $('.ul-topping').not('.slick-initialized').slick({
   //    infinite: true,
   //    slidesToShow: 3,
   //    dots: false,
   //    arrows: false
   // });

   $(".btn-wish").click(function(){
      //console.log(typeof wishStorage);
      const foodId = $('#foodId').val();
      
      const id = wishStorage.filter((wish) => wish.foodId == foodId);
      
      if(id.length == 0) {
         const foodTitle = $('.food-title').text();
         const foodDescription = $('.food-description').text();
         const price = $('.opt-price').text();
         const foodImg = $('#food-img').attr("src");

         let dummy = { 
            "foodId": foodId,
            "title": foodTitle, 
            "desc": foodDescription, 
            "price": price, 
            "foodImg": foodImg
         };
         wishStorage.push(dummy);
         localStorage.setItem("wishItems", JSON.stringify(wishStorage));
      }
         $.mobile.changePage("#list-wish", { 
            transition: "slidedown",
            role: 'dialog'
         });
});

$(".btn-cart").click(function(){
   //console.log(typeof cartStorage);
   const foodId = $('#foodId').val();
   
   const id = wishStorage.filter((cart) => cart.foodId == foodId);
   
   if(id.length == 0) {
      const foodTitle = $('.food-title').text();
      const foodDescription = $('.food-description').text();
      const price = $('.opt-price').text();
      const foodImg = $('#food-img').attr("src");

      let dummy = { 
         "foodId": foodId,
         "title": foodTitle, 
         "desc": foodDescription, 
         "price": price, 
         "foodImg": foodImg
      };
      cartStorage.push(dummy);
      localStorage.setItem("cartItems", JSON.stringify(cartStorage));
   }
      $.mobile.changePage("#list-cart", { 
         transition: "slidedown",
         role: 'page'
      });
});



   


   });//Jquery










function distorySlick(){
   if($('.ul-topping, .slick').hasClass('slick-initialized')){
      $('.ul-topping, .slick').slick('unslick');
   }
}

function storageClear(){
   
   localStorage.clear();
//    const myStorage = ["wishItems", "userid", "cartItems", "members", "userpass", "isAuthorized"];
//    for(let i = 0; i < myStorage.length; i++) {
//        localStorage.removeItem(myStorage[i]);
//    }
   window.location.href="index.html";

}