const a = 10, b = 20, m = 30, n = 40;
let result;

result = a > b || b >= m || m > n; //false||false||false
console.log(result);

result = a > b || b <= m || m <= n; //false||false||true
console.log(result);

result = a <= b && b >= m && m <= n; //true||false||true
console.log(result);

result = !(a > b);
console.log(result);


