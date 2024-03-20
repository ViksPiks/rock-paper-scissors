const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISORS = "SCISORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK} , ${PAPER} , ${SCISORS}`).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISORS) {
    alert(`Invalid choice! We chose ${ROCK} for you`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  // равный шанс на все случаи по 0.33 на каждую
  if (randomValue < 0.33) {
    return ROCK;
  } else if (randomValue < 0.66) {
    return PAPER;
  } else {
    return SCISORS;
  }
};

const getGameResult = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  }

  if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISORS) ||
    (computerChoice === SCISORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  }

  return RESULT_COMPUTER_WINS;
};

const notifyUserAboutGameResult = (
  computerChoice,
  playerChoice,
  gameResult
) => {
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;

  if (gameResult === RESULT_DRAW) {
    message = message + "had a Draw";
  } else if (gameResult === RESULT_PLAYER_WINS) {
    message = message + "won";
  } else {
    message = message + "lost";
  }

  alert(message);
};

const startGameBtn = document.getElementById("start-game-btn");

let isGameRunning = false;

startGameBtn.addEventListener("click", () => {
  console.log("Game is starting...");

  if (isGameRunning) {
    return;
  }

  isGameRunning = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const gameResult = getGameResult(playerChoice, computerChoice);

  notifyUserAboutGameResult(computerChoice, playerChoice, gameResult);

  isGameRunning = false;
});
