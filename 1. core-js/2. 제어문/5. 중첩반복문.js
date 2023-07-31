let cnt = 0;
for (let i = 0; i < 3; i++) {      // 10회
    for (let j = 0; j < 2; j++) {  //7회
        // console.log(`${i}, ${j}`);  // 10 x 7 = 70 회 반복
        for (let k = 0; k < 4; k++) {
            cnt++;
        }
    }
}
console.log(`총 반복 횟수: ${cnt} 회`);

// // 모든 구구단 출력

// for (let level = 2; level <=9; level++) {
//     console.log(`==== 구구단 ${level}단 ====`);
//     for (let line = 1; line <= 9; line++) {
//       console.log(`${level} x ${line} = ${level * line}`);
//     }
//     console.log('=====================');
//   }
  