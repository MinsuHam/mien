//2.	주어진 문자열 앞에 “Java”를 추가하라. 단 Java로 시작하면 Java를 추가하지 말고 그대로 반환하라.
function addJava(str){
    if(str.substring(0, 4) === "Java"){
        return str;
    }
    return "Java" + str;
}

console.log(addJava("Script"));
console.log(addJava("JavaScript"));