//1.두 개의 정수를 받아 하나는 양수이고 하나는 음수인지를 판별하는 프로그램

function pnum(x, y){
    if((x < 0 && y >0) || (x > 0 && y < 0)){
        return true;
    }else{
        return false;
    }
}
console.log(pnum(10, 20));
console.log(pnum(-10, 10));
console.log(pnum(10, -9));