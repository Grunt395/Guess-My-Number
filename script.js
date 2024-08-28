
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function for changing displayed message
function displayText(text) {
    document.querySelector(".text").textContent = text;
}

document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);
    
    // Empty Guess
    if (!guess) {
        displayText("No guess...");
    }
    
    // Correct Guess
    else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
        }
        displayText("You Win!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.backgroundColor = "#60b347";
    }
    
    // Too High or Low
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayText(guess > secretNumber ? "Too High!" : "Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        }
    }

});

// Reset Button
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayText("Start Guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "10rem";
});