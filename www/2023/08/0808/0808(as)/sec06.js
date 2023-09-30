//6.두 개의 숫자 값 중에서 100에 가까운 값을 찾는 프로그램을 작성하라.
// abs()

function near_100(x , y){
    if(x != y){
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

       if(x1 < y1){
          return x;
       }
       if(y1 < x1) {
          return y;
       }
       return "두 수가 같아요.";
    }else{
        return "두 수가 같아요.";
    }
}
  
console.log(near_100(15, 16));
console.log(near_100(99, 101));
console.log(near_100(15, 15));