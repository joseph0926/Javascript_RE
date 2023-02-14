const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "바위";
const SCISSORS = "가위";
const PAPER = "보";
const DEFAULT_USER_CHOICE = ROCK;

const DRAW = "DRAW";
const PLAYER_WIN = "PLAYER_WIN";
const COMPUTER_WIN = "COMPUTER_WIN";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt("가위, 바위, 보 중 하나를 입력해주세요", "");
  if (selection !== SCISSORS && selection !== ROCK && selection !== PAPER) {
    alert(`유효하지 않은 입력값입니다..임의로 ${DEFAULT_USER_CHOICE}가 선택되셨습니다.`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (cChoice === pChoice) {
    return DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return PLAYER_WIN;
  } else {
    return COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("게임 시작...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
  }
  let message;
  message = `당신의 선택은 [${
    playerSelection ? playerSelection : DEFAULT_USER_CHOICE
  }], 컴퓨터의 선택은 [${computerChoice}]입니다. 따라서 결과는 [${winner}]입니다.`;
  alert(message);
  gameIsRunning = false;
});

const sumUp = (...number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  console.log(number);
  // 출력결과 => [1, 2, 3, 4, 5, 6]
  return sum;
};

const sumOld = function () {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 2, 3, 4, 5, 6));
