let num1 = 10;
let num2 = 3;

//num1 = num1 + num2;
num1 += num2;
console.log(num1); //13

num1-=num2;
console.log(num1); //10

num1 *= num2; //30 
console.log(num1);

num1 %= num2;
console.log(num1); //0
console.log("-----------------------");
let num11 = 10;
let num22 = 20;
let result;
num11--;
num22++;
console.log(num11);
console.log(num22);

x = 5;
x**= 2;
console.log(x);

console.log("-----------------------");

const a = 10;
const b = 20;
const c = 10;
const f = "20";

result = a > b;
console.log(result);

result = a < b;
console.log(result);

result = b == f; //type과 상관없이 같은지
console.log(result);

result = b === f; //type과 값이 같은지
console.log(result);

// true && true ==> true
// true && false ==> false
// false && true ==> false
// false && false ==> false

// true || true ==> true
// true || false ==> true
// false || true ==> true
// false || false ==> false

// !(true && true) ==> false // not연산자