//세 수가 모두 양의 정수이며 마지막 숫자가 같다면 true를
//1. 세 수가 모두 양의 정수인가? 
function 그어떤함수(x, y, z){ 
    if( x > 0 && y > 0 && z > 0){
      return (x % 10 == y % 10 && y % 10 == z % 10 && z % 10 == z % 10);      
    }else{
        return false;
    }
}

