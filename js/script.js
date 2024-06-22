/*
this.compScoreDisplay = document.getElementById("computer");
this.compScore = 0;
this.playerScoreDisplay = document.getElementById("player");
this.playerScore = 0;
this.gameText = document.getElementById("text");
this.rockButton = document.getElementById("rock");
this.paperButton = document.getElementById("paper");
this.scissorsButton = document.getElementById("scissors");

this.playerChoice = 0;

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
    this.compChoice = Math.floor(Math.random() * 3) + 1;
    this.comp = "";
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
    this.difference = (parseInt(player[player.length -1]) - parseInt(computer[computer.length -1]) + 3) % 3;
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
*/

class Game {
  constructor() {
    this.compScore = 0;
    this.playerScore = 0;
    this.gameText = document.getElementById("text");
    this.compScoreDisplay = document.getElementById("computer");
    this.playerScoreDisplay = document.getElementById("player");
    this.choices = ["rock", "paper", "scissors"];
  }

  resetGame() {
    this.compScore = 0;
    this.playerScore = 0;
    this.updateScore();
    this.gameText.innerHTML = `
    <p id="game-text">Let's play rock, paper, scissors. Best out of 3.</p>
    `;
  }

  updateScore() {
    this.compScoreDisplay.textContent = this.compScore;
    this.playerScoreDisplay.textContent = this.playerScore; // Correct property name
  }

  getComputerChoice() {
    const index = Math.floor(Math.random() * this.choices.length);
    console.log(this.choices[index]);
    return this.choices[index];
  }

  determineWinner(playerChoice, computerChoice) {
    let result;

    if (playerChoice === computerChoice) {
      result = "tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      result = "player";
    } else {
      result = "computer";
    }

    switch (result) {
      case "tie":
        this.gameText.innerHTML = `
                <p id="game-text">It's a tie! You both chose ${playerChoice}.</p>
            `;
        break;
      case "player":
        this.playerScore++;
        this.gameText.innerHTML = `
                <p id="game-text">You win! ${playerChoice} beats ${computerChoice}.</p>
            `;
        this.updateScore();
        break;
      case "computer":
        this.compScore++;
        this.gameText.innerHTML = `
                <p id="game-text">You lose! ${computerChoice} beats ${playerChoice}.</p>
            `;
        this.updateScore();
        break;
    }

    // Check for the overall winner
    this.checkForWinner();
  }

  checkForWinner() {
    if (this.playerScore >= 2) {
      this.gameText.innerHTML = `
            <h1>YOU WIN!</h1>
            <p id="game-text">Thanks for playing!</p>
            <p id="game-text">How about a <button id="replay" type="button">REMATCH</button></p>
        `;
      document
        .getElementById("replay")
        .addEventListener("click", () => this.resetGame());
    }

    if (this.compScore >= 2) {
      this.gameText.innerHTML = `
            <h1>YOU LOSE!</h1>
            <p id="game-text">Thanks for playing!</p>
            <p id="game-text">How about a <button id="replay" type="button">rematch</button></p>
        `;
      document
        .getElementById("replay")
        .addEventListener("click", () => this.resetGame());
    }
  }
  handlePlayerChoice(playerChoice) {
    const computerChoice = this.getComputerChoice();
    this.determineWinner(playerChoice, computerChoice);
  }
}

const game = new Game();
game.resetGame();

document
  .getElementById("rock")
  .addEventListener("click", () => game.handlePlayerChoice("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => game.handlePlayerChoice("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => game.handlePlayerChoice("scissors"));
