const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const btns = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const choices = ["👊", "✋", "✌️"]; 

btns.forEach(btn => {
    btn.addEventListener("click", event => {
        computerChoice.textContent = choices[Math.floor(Math.random() * 3)];
        playerChoice.textContent = choices[event.target.value];
        if (computerChoice.textContent == playerChoice.textContent)
            result.textContent = "It's A Tie!";
        else {
            switch (playerChoice.textContent) {
                case "👊":
                    if (computerChoice.textContent == "✌️") {
                        result.textContent = "You Win!";
                        playerScore.textContent++;
                    }
                    else {
                        result.textContent = "You Lose!";
                        computerScore.textContent++;
                    }
                    break;
                case "✋":
                    if (computerChoice.textContent == "👊"){
                        result.textContent = "You Win!";
                        playerScore.textContent++;
                    }
                    else {
                        result.textContent = "You Lose!";
                        computerScore.textContent++;
                    }
                    break;
                case "✌️":
                    if (computerChoice.textContent == "✋") {
                        result.textContent = "You Win!";
                        playerScore.textContent++;
                    }
                    else {
                        result.textContent = "You Lose!";
                        computerScore.textContent++;
                    }
                    break;
            }
        }
    });
});

