
let secretNumber = Math.floor(Math.random() * 20) + 1;
let guess = 0;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function() {
    guess = Number(document.querySelector(".guess").value);
    
    if (!guess) {
        document.querySelector(".text").textContent = "No guess...";
    }
    
    else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector(".text").textContent = "You Win!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector(".number").style.width = "15rem";
        document.querySelector("body").style.backgroundColor = "#60b347";
    }
    
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".text").textContent = guess > secretNumber ? "Too High!" : "Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
    }

});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".text").textContent = "Start Guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "10rem";
});