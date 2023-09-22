function getRandomInt(min, max) {
    min = Math.ceil(min); //올림
    max = Math.floor(max); //내림
    return Math.floor(Math.random() * (max - min)) + min; // 최대값은 제외, 최소값은 포함
  }

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


  function getGUID1(length){
    //97-122 사이에 랜덤한 정수 만들기
    let result = '';
    for(let i =0; i < length; i++){
      result += String.fromCharCode(getRandomInt(65,90))
    }
    //아스키 문자를 이용하여 문자로 반화
      return result;
    }

    function getGUID2(length){
        //97-122 사이에 랜덤한 정수 만들기
        let result = '';
        for(let i =0; i < length; i++){
          result += String.fromCharCode(getRandomInt(97,122))
        }
        //아스키 문자를 이용하여 문자로 반화
          return result;
        }

        function getGUID3(length){
            //97-122 사이에 랜덤한 정수 만들기
            let result = '';
            for(let i =0; i < length; i++){
              result += String.fromCharCode(getRandomInt(48,57))
            }
            //아스키 문자를 이용하여 문자로 반화
              return result;
            }

console.log(getGUID1(26) + getGUID2(26) + getGUID3(10));