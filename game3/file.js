let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =  ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor = " rgb(255, 153, 0);";
};
const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose.  ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const CompChoice = genCompChoice();
    console.log("computer choice = ", CompChoice);

    if(userChoice === CompChoice) {
        //draw game
        drawgame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            CompChoice ===  "paper" ? false : true;

        } else if (userChoice === "paper") {
            //rock, scissors
           userWin = compScore === "scissors" ? false : true;
         } else { 
            //rock, paper
            userWin = CompChoice === "rock" ? false : true;

         }
         showWinner(userWin, userChoice, CompChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});