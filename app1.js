const p1 =
{
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 =
{
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector("#Reset");
const winningScoreSelect = document.querySelector('#playto');

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector("#Reset");
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const winningScoreSelect = document.querySelector('#playto');
// let p1Score = 0;
// let p2Score = 0;

let winningScore = 5;
// at the begining, game is not over, so , it is set to false
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score = player.score + 1;
        if (player.score === winningScore) {
            // set it to true, so that it will not increment any further.If either player 1 or player 2 satisfy the true condition, then none of it will run. 
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
}
)
// if we are still playing the game i.e !gameover
//     if (!isGameOver) {
//         p1Score = p1Score + 1;
//         if (p1Score === winningScore) {
//             // set it to true, so that it will not increment any further.If either player 1 or player 2 satisfy the true condition, then none of it will run. 
//             isGameOver = true;
//             p1Display.classList.add("has-text-success");
//             p2Display.classList.add("has-text-danger");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
}
)
//     if (!isGameOver) {
//         p2Score = p2Score + 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p2Display.classList.add("has-text-success");
//             p1Display.classList.add("has-text-danger");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

// Changing the winning score by selecting a value from the playto dropdown. 

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// Reset button 

// resetButton.addEventListener('click', function () {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
// })

// OR

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;

    }
}