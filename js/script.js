
let compScoreDisplay = document.getElementById("computer");
let compScore = 0;
let playerScoreDisplay = document.getElementById("player");
let playerScore = 0;
let gameText = document.getElementById("text");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let playerChoice = 0;

function replayGame() {
    compScore = 0;
    compScoreDisplay.textContent = 0;
    playerScore = 0;
    playerScoreDisplay.textContent =0;
    gameText.innerHTML = `
    <p id="game-text">Let's play rock, paper, scissors. Best out of 3.</p>
    `
}

function computerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    let comp = "";
    if (compChoice === 1) {
         comp = "rock1";
    } else if (compChoice === 2) {
        comp = "paper2";
    } else {
        comp = "scissors3";
    }
    return comp;
}

function determineWinner(player, computer) {
    let difference = (parseInt(player[player.length -1]) - parseInt(computer[computer.length -1]) + 3) % 3;
    if (difference === 0) {
        gameText.innerHTML = `
        <p id="game-text">You picked <span class="bold">${player.slice(0, -1)}</span>.</p>
        <p id="game-text"><span style="font-style: italic;">OOPS!</span> I also picked <span class="bold">${computer.slice(0, -1)}</span>!</p>
        <p id="game-text">I guess its a tie! Lets go again!</p>
        `;
    } else if (difference === 1) {
        gameText.innerHTML = `
        <p id="game-text">You picked <span class="bold">${player.slice(0, -1)}</span>.</p>
        <p id="game-text">I picked <span class="bold">${computer.slice(0, -1)}</span>!</p>
        <p id="game-text"><span style="font-style: italic;">ARGH!</span> You win this round. Let's go again!</p>
        `;
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
    } else {
        gameText.innerHTML = `
        <p id="game-text">You picked <span class="bold">${player.slice(0, -1)}</span>.</p>
        <p id="game-text">I picked <span class="bold">${computer.slice(0, -1)}</span>!</p>
        <p id="game-text"><span style="font-style: italic;">OOPS!</span> Better luck next round... Let's go again!</p>
        `;
        compScore++;
        compScoreDisplay.innerText = compScore;
    }

    if (playerScore >= 2) {
        gameText.innerHTML = `
        <h1>YOU WIN!</h1>
        <p id="game-text">Thanks for playing!</p>
        <p id="game-text">How about a <button id="replay" type="button">REMATCH</button></p>
        `;
        document.getElementById('replay').addEventListener('click', replayGame);
    }

    if (compScore >= 2) {
        gameText.innerHTML = `
        <h1>YOU LOSE!</h1>
        <p id="game-text">Thanks for playing!</p>
        <p id="game-text">How about a <button id="replay" type="button">rematch</button></p>
        `;
        document.getElementById('replay').addEventListener('click', replayGame);
    } 
}

console.log(computerChoice());


rockButton.addEventListener('click', () => {
    playerChoice = "rock1";
    determineWinner(playerChoice, computerChoice());
    
});

paperButton.addEventListener('click', () => {
    playerChoice = "paper2";
    determineWinner(playerChoice, computerChoice());
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "scissor3";
    determineWinner(playerChoice, computerChoice());
});
