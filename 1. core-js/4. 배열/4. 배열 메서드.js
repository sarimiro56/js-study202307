
let foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

let findTarget = '족발';

// let index = -1;
// for (let i = 0; i < foodList.length; i++) {
//     if (findTarget === foodList[i]) {
//         index = i;
//         break;
//     }
// }

// indexOf : 배열의 특정 요소가 몇번 인덱스에 있는지 탐색
let index = foodList.indexOf(findTarget);

console.log(`찾은 인덱스: ${index}`);

// include() : 배열의 특정 요소가 존재하는지 논리 여부 확인
let isPresent = foodList.includes('닭꼬치');
console.log(`존재 여부: ${isPresent}`);

// slice() : 배열을 일정부분 잘라내어, 복사본 배열을 반환
console.log('======================');

foodList.push('오뎅', '국밥');
console.log(foodList);

// 0번 인덱스부터 3번 인덱스 미만 (2번까지)
let slicedFoodList = foodList.slice(0, 3);
console.log(slicedFoodList);
console.log(foodList);

// 3번부터 끝까지
let sliced2 = foodList.slice(3);
console.log(sliced2);

// 원본 배열을 그대로 복사
let copyArr = foodList.slice();
console.log(copyArr);

// reverse() : 배열을 역순으로 정렬, 원본이 변하는 것에 주의
console.log('=========================');

let arr1 = [10, 20, 30];
let arr2 = [9, 7, 5, 3, 1];

arr1.reverse();
console.log(arr1);

let arr2Copy = arr2.slice();
arr2Copy.reverse();
console.log(arr2Copy);
console.log(arr2);

// concat() : 배열을 2개를 결합, 결합한 사본을 리턴
console.log('==========================');
let concated = arr1.concat(arr2);
console.log(concated);
console.log(arr1);
console.log(arr2);

// splice() : 배열의 특정요소 제거, 삽입  // 원본에서 직접 작용
console.log('=============================');

console.log(foodList);

foodList.splice(3, 2);
console.log(foodList);

foodList.splice(2, 1, '보쌈');
console.log(foodList);

foodList.splice(1, 0, '마라탕');
console.log(foodList);

// clear() : 배열 전체 삭제
// foodList.clear();
// console.log(foodList);

// 전체 삭제
// foodList.splice(0);

foodList = [];
console.log(foodList);