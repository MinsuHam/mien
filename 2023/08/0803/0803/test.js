console.log("----------------------1------------------------");

const func = function() {
    console.log("당신");
    return new Promise((res) => {
        res("개발자");

    });
}
console.log("----------------------2------------------------");
const execute = func()

console.log("근처의")

setTimeout(() => {
    console.log("초보개발자");
}, 0)
execute.then((msg)=> console.log(msg));

console.log("----------------------3------------------------");



