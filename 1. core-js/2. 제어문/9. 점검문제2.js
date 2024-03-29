// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며
// 난이도별 입력 횟수제한이 다르다.

// 난이도 상수
const HIGH = 1;
const MIDDLE = 2;
const LOW = 3;

// 초기 난이도 설정 선택창 띄우기
let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

// 초기 카운트 수
let initCount;


if (level === HIGH) {
  initCount = 3;
} else if (level === MIDDLE) {
  initCount = 6;
} else if (level === LOW) {
  initCount = 10;
} else {
  alert('잘못 입력했으니까 난이도 상으로 자동 시작합니다.');
  initCount = 3;
}

// 카운트다운 변수
let countdown = initCount;

// 실제로 정답으로 사용할 랜덤 정수 만들기
let secret = Math.floor(Math.random() * 100) + 1;

// 입력 최소, 최대값
let min = 1, max = 100;


while (true) {

  // 사용자의 정답 입력값
  let answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

  // 입력값 유효성 검사
  // 지금 입력범위 안의 값인가??
  if (answer < min || answer > max) {
    alert(`범위 안의 값을 입력하세요!`);
    continue;
  }

  countdown--; // 카운트 감소

  // 업 다운 판단
  // 정답인 경우
  if (secret === answer) {
    alert(`정답입니다! ${initCount - countdown}번만에 맞췄습니다!`); // 게임종료 조건 1
    break;
  } else if (secret > answer) {
    alert(`UP!!`);
    min = answer + 1;
  } else {
    alert(`DOWN!!`);
    max = answer - 1;
  }

  // 추가 게임 종료 조건
  if (countdown === 0) {
    alert(`ㅠㅠ 패배하셨습니다! 정답은 ${secret}였지롱 ㅋㅋ`);
    break;
  } else {
    alert(`${countdown}번의 기회가 남았습니다.`);
  }

} // end while loop

alert(`수고하셨습니다!`);


// let lv = prompt('[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]');

// if (lv === '1') {
//   const a = Math.floor(Math.random() * 100) + 1;
//   let attempts = 1;

//   while (attempts <= 3) {
//     let aw = +prompt(`남은 기회: ${4 - attempts}회\n1 ~ 100 사이의 숫자를 맞춰보세요!`);

//     if (isNaN(aw) || aw < 1 || aw > 100) {
//       alert('1에서 100 사이의 숫자를 입력해주세요.');
//     } else {
//       if (aw === a) {
//         alert('딩동댕~');
//         break;
//       } else if (aw > a) {
//         alert('Down!!!');
//       } else {
//         alert('UP!!!');
//       }
//     }
//     attempts++;
//   }

//   if (attempts > 3) {
//     alert(`게임 오버! 정답은 ${a}입니다.`);
//   }
// } else if (lv === '2') {
//     const a = Math.floor(Math.random() * 100) + 1;
//     let attempts = 1;
  
//     while (attempts <= 6) {
//       let aw = +prompt(`남은 기회: ${7 - attempts}회\n1 ~ 100 사이의 숫자를 맞춰보세요!`);
  
//       if (isNaN(aw) || aw < 1 || aw > 100) {
//         alert('1에서 100 사이의 숫자를 입력해주세요.');
//       } else {
//         if (aw === a) {
//           alert('딩동댕~');
//           break;
//         } else if (aw > a) {
//           alert('Down!!!');
//         } else {
//           alert('UP!!!');
//         }
//       }
//       attempts++;
//     }
  
//     if (attempts > 6) {
//       alert(`게임 오버! 정답은 ${a}입니다.`);
//     }
// } else if (lv === '3') {
//   const a = Math.floor(Math.random() * 100) + 1;
//   let attempts = 1;

//   while (attempts <= 10) {
//     let aw = +prompt(`남은 기회: ${11 - attempts}회\n1 ~ 100 사이의 숫자를 맞춰보세요!`);

//     if (isNaN(aw) || aw < 1 || aw > 100) {
//       alert('1에서 100 사이의 숫자를 입력해주세요.');
//     } else {
//       if (aw === a) {
//         alert('딩동댕~');
//         break;
//       } else if (aw > a) {
//         alert('Down!!!!');
//       } else {
//         alert('UP!!!!');
//       }
//     }
//     attempts++;
//   }

//   if (attempts > 10) {
//     alert(`게임 오버! 정답은 ${a}입니다.`);
//   }
// } else {
//     alert('잘못된 입력입니다.');
// }