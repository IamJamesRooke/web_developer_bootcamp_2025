// Player object constructor
function Player(buttonSelector, displaySelector) {
    this.score = 0;
    this.button = document.querySelector(buttonSelector);
    this.display = document.querySelector(displaySelector);
}

const p1 = new Player('#p1Button', '#p1Display');
const p2 = new Player('#p2Button', '#p2Display');

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

// Update player scores
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            endGame(player, opponent);
        }
        player.display.textContent = player.score;
    }
}

// End the game
function endGame(winner, loser) {
    isGameOver = true;
    winner.display.classList.add('has-text-success');
    loser.display.classList.add('has-text-danger');
    winner.button.disabled = true;
    loser.button.disabled = true;
}

// Reset the game
function reset() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

// Event listeners
p1.button.addEventListener('click', () => updateScores(p1, p2));
p2.button.addEventListener('click', () => updateScores(p2, p1));
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});
resetButton.addEventListener('click', reset);