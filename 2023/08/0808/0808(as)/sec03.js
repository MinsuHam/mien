//3의 배수인지 7의 배수인지 확인하는 프로그램을 작성하라.
function nums(num){
    if(num % 3 == 0 || num %7 ==0){
        return true;
    }else{
        return false;
    }
}

console.log(nums(13));
console.log(nums(9));
console.log(nums(14));