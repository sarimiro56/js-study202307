
//  1 ~ 10 사이의 랜덤 정수를 생성
//  Math.random() -> 0.0 이상 ~ 1.0 미만의 랜덤 실수 생성
//  Math.random() * 10 -> 0.0 <= ~ < 10.0
//  Math.floor(Math.random() * 10) -> 0 <= ~ < 10
//  Math.floor(Math.random() * 10) + 1 -> 1 <= ~ < 11

//  x이상 y이하의 랜덤 정수 생성 공식
//  Math.floor(Math.random() * (y - x + 1)) + x;

//  117 ~ 123

let rn = Math.floor(Math.random() * 7) + 117;
console.log(rn);