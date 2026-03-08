let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    let randmidx = Math.floor(Math.random() * 3);
    return options[randmidx];
}
let drawgame = () => {
    msg.innerText = "draw game.play again"
    msg.style.backgroundColor = "yellow";
}
let showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win.your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

}
let playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin;
        if (userChoice === "stone") {
            userWin = (compChoice === "paper") ? false : true;
        } else if (userChoice === "scissors") {
            userWin = (compChoice === "stone") ? false : true;
        } else {
            userWin = (compChoice === "scissors") ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
