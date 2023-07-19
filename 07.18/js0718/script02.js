let num1 = 100;
let num2 = 70;
let num3 = 245.5;
let num4 = 7;
let num5 = 3;
let num6 = 2;
let result;

result1 = num1 % num2;
result2 = num3 % num4;
result3 = num5 % num6;
console.log(result1);
console.log(result2);
console.log(result3);

//덧셈 연산자는 문자열 결합 연산자로도 쓰임.
let str1 = "학교종이";
let str2 = "땡떙떙"; 
let str3 = 8282;
let str4 = "어서 모이자";

console.log(str1 + " " + str2 + " " + str3 + " " + str4);

const name1 = "철수";
const name2 = "민수";

console.log(name1 + "와 " + name2 + "는 그렇게 친한 친구는 아니다. ");
console.log(name1 + "는 속으로 생각했다. " + name2 + " 바보녀석");
console.log(name2 + "가 말했다. " + name1 + ", 정말 그러기야? ");

console.log(name2 + ' 가 말했다. "' + name1 + ', 정말 그러기야? "');

console.log("------------------------------------------------------------------------------------------");
result = name1 + " 와 " + name2 + "는그렇게 친한친구는 아니다.";
console.log(result);

result = name1 + "은 속으로 생각했다. '" + name2 + " 바보녀셕'";
console.log(result);

result = name2 + ' 가 말했다. "'  + name1 + ', 정말 그러기야?"';
console.log(result);