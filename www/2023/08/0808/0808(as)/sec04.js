//4.	두 정수의 값이 50에서 99이하의 범위에 있는지 확인
function check_numbers(x, y){
    if(( x >= 50 && x <= 99 ) || ( y >= 50 && y <= 99)) {
        return true;
    }else{
        return false;
    }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));