var wins = 0;
    loses = 0;
    ties = 0;

let options = ["Rock", "Paper", "Scissors"];

let playGame = function () {
    let userChoice = window.prompt("Enter Rock, Paper, or Scissors");
    }

if (!userChoice) {
    return;
} 
userChoice = userChoice.toUpperCase();

let index = Math.floor(Math.random() * option.length);
let computerChoice = options[index];

window.alert("the computer chose " + computerChoice);

if (userChoice === computerChoice) {
    ties++;
    window.alert("tie");
    else if (
     (userChoice === "R" && computerChoice === "S");
     (userChoice === "P" && computerChoice === "R");
     (userChoice === "S" && computerChoice === "P");
    )
    wins++;
    window.alert ("WINNER");

    let playAgain = window.confirm("play again");

    if (playAgain) {
        playGame();
    }
}

/* 
create an array with math.random that holds specila chracters.

declare functions and variables
let

prompt
how many characters?
if 
    too much/little;
    display bad message.
    else

confirm();        
do you wanna do numbers?
if yes, continue
    if no,
    too much/little;
    display bad message.

confirm();
lowercase?
if yes, continue
    if no,
    too much/little;
    display bad message.

confirm();
uppcase?
if yes, continue
    if no,
    too much/little;
    display bad message.
