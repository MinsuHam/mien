const paging ={ 
    pageView : (
       pageNo,    
       countList,
       countPage,
       pageSize, 
       totalCount, 
       targetFunction
    ) => {
      //pageNo = 현재 페이지 번호
      //countList = 한 화면에 출력될 게시글 수
      //countPage = 한 화면에 출력된 페이지 개수
      //pageSize = 전체 페이지 크기
      //totalCount = 전체 게시글 수  
      const pageNo = parseInt(pageNo);
      const finalPageNo = parseInt(totalCount / pageSize); //마지막 페이지 번호
      let strPaging = '';
      let targetFunction = (targetFunction == null || targetFunction == "") ?
                   "goPage" : targetFunction; 
       if(totalCount % pageSize > 0) {
          finalPageNo++;
       }   
       if(finalPageNo < pageNo) {
          pageNo = finalPageNo;
       }         
       
       //시작페이지 계산
       let startPage = Math.floor(((pageNo-1)/countPage))*countPage + 1;
       //마지막 페이지 계산
       let endPage = startPage + countPage - 1;
       if(startPage <= 0) {
          startPage = 1;
       }
       if(endPage > finalPageNo) {
          endPage = finalPageNo;
       }

       //이전 페이지 구문
       if(pageNo > 1) {

       }
       for(let i = startPage; i <= endPage; i++) {
          if(i == pageNo){
             //현재 페이지
          }else{

          }
       }
       if(pageNo < finalPageNo) {
           //다음페이지
       }
       return ;
    }
};