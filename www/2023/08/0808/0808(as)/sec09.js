//두 번째와 네 번째 위치 사이에 지정된 문자가 있는지 확인하는 프로그램을 작성하라.
function check_str(str, char){
    let flag = 0;
    for(let i = 0; i < str.length; i++){
        if((str.charAt(i) == char) && ( i >= 1 && i<=3)){
           flag = 1;
           break;
        }
    }
    if(flag == 1) return true;
    return false;
}

console.log(check_str("JavaScript", "a"));
console.log(check_str("Python", "y"));
console.log(check_str("홍길동만세", "길"));
