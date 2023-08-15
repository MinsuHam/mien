//5.	주어진 세 정수 중 가장 큰 정수를 찾는 프로그램을 작성하라
function maxNumber(x, y, z){
   let max_val = 0;
   if(x > y){
      max_val = x;
   }else{
      max_val = y;
   }
   if(z > max_val){
      max_val = z;
   }
   return max_val;
}

console.log(maxNumber(1, 3, 2));
console.log(maxNumber(100, 15, 99));
console.log(maxNumber(1, 7, 20));
