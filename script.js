//initializing scores
let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msgElement = document.querySelector("#msg");
const Uscore = document.querySelector("#User-Score");
const Csore = document.querySelector("#Comp-Score");
const drawgame = () => {
    console.log("game was draw");
    msgElement.innerText = "game was draw";
    msgElement.style.backgroundColor = "deeppink";
};

const getCompChoice=()=>{
    const choicesArray=["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choicesArray.length);
    return choicesArray[randomChoice];
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("computer choice =", compChoice);
    if(compChoice===userChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="scissors"?true:false;
        }
        else if(userChoice=="paper"){
            userWin = compChoice==="rock"?true:false;
        }
        else{
            userWin = compChoice==="paper"?true:false;
        }
        showWinner(userWin);
    }
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        Uscore.innerText=userScore;
        console.log("you win!");
        msgElement.innerText="you win!";
        msgElement.style.backgroundColor = "green";
    }
    else{
        compScore++;
        Csore.innerText=compScore;
        console.log("computer wins");
        msgElement.innerText="computer wins";
        msgElement.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
   });
   
});