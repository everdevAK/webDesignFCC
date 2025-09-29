const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.querySelector("#reset-game-btn");


let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    return (
        player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper"
    );
}

function getRoundResults(userOption) {
    const computerOption = getRandomComputerResult(); 
    if (hasPlayerWonTheRound(userOption, computerOption)) {
        playerScore++;
        return `Player Win's! ${userOption} beats ${computerOption}`;
    } else {
        computerScore++;
        return `Computer Win's! ${computerOption} beats ${userOption}`;
    }
}

function showResults(userOption) {
    resultMsg.innerText = getRoundResults(userOption);
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;

    if (playerScore === 3) {
        winnerMsg.innerText = "Player has won the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.classList.remove("hide");   
    } else if (computerScore === 3) {
        winnerMsg.innerText = "Computer has won the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.classList.remove("hide");
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    resultMsg.innerText = "";
    winnerMsg.innerText = "";
    optionsContainer.style.display = "block";
    resetGameBtn.classList.add("hide");
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function (e) { showResults("Rock"); });
paperBtn.addEventListener("click", function (e) { showResults("Paper"); });
scissorsBtn.addEventListener("click", function (e) { showResults("Scissors"); });
resetGameBtn.addEventListener("click", resetGame);