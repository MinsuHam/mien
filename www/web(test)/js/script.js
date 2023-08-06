// <!-- 슬라이드 표현 -->
    $(function() {
        let currentIndex = 0; //현재 이미지
        
        setInterval(function(){ // 3초에 한번씩 실행
            let nextIndex = (currentIndex + 1) % 3; //1 2 0 1 2 0..

            $(".slider").eq(currentIndex).fadeOut(1200); //첫번째 이미지 사라짐
            $(".slider").eq(nextIndex).fadeIn(1200); // 두번째 이미지 나타남

            currentIndex = nextIndex; // 두번째 인덱값을 현재 인덱값에 저장

            console.log("currentIndex :" + currentIndex)
            console.log("nextIndex :" + nextIndex)
        }, 3000);
    });

    // <!-- 탭메뉴 표현 -->
    $(function(){
        let tabBtn = $(".tab-btn > ul > li"); //버튼 설정
        let tabCont = $(".tab-cont > div"); // 콘텐츠 설정

        tabCont.hide().eq(0).show(); //첫번째 콘첸츠만 보이게 설정

        tabBtn.click(function(){
            const index = $(this).index(); //클릭한 번호를 저장
            // alert(index);

            //아래는 내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
            $(this).addClass("active").siblings().removeClass("active"); 
            tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
        });
    });

    $(function() {
        $(".popup-btn").click(function(){
            $(".popup-view").show();
        });
        $(".popup-close").click(function(){
            $(".popup-view").hide();
        });
    });



