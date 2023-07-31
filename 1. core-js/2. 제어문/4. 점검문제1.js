
// 1 ~ 10 까지의 총합
// let n = 1;
// let total = 0; // 총합 저장

// while (n <= 10) {
//     total += n; // 0 + 1 = 1
//     n++;
// }
// console.log(`1 ~ 10 까지의 총합: ${total}`);
// ---------------------------------------
let x = +prompt('첫번째 숫자를 입력.');
let y = +prompt('두번째 숫자를 입력.');

if (x > y) {
    let t = x;
    x = y;
    y = t;21
}

let total = 0; // 총합 저장

for (let n = x; n <= y; n++) {
    total += n; // 0 + 1 = 1
}
alert(`${x} ~ ${y} 까지의 총합: ${total}`);

// let a = +prompt('첫번째 숫자를 입력.');
// let b = +prompt('두번째 숫자를 입력.');
// let c = 0;

// if (a > b) {
//     for (let i = a; i <= b; i++) {
//         c += i;
//     }
//     alert(`${b}~${a}까지의 누적합: ${c}`);
// }
// else {
//     for (let i = b; i <= a; i++) {
//         c += i;
//     }
//     alert(`${a}~${b}까지의 누적합: ${c}`);  
// }