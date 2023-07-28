/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
function calcNumbersTotalAndAverage(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    // 평균 구하기
    let avg = total / numbers.length;
    return {
        total,
        avg        //ES6 문법은 변수의 이름과 값의 이름이 같을 경우 저렇게 생략 가능.
    };
}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);