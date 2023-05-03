// Assignment code here
var passwordMIN_MAX = [];
var lowercase = [];
var uppercase = [];
var numbers = [];
var specialCha = [];

// let index = Math.floor(Math.random() * option.length);
// let computerChoice = options[index];
// window.alert("the computer chose " + computerChoice);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    window.prompt("Ent-ah a numb-uh between 8 and 128", passwordMIN_MAX);
        if (passwordMIN_MAX <= 7 || passwordMIN_MAX >= 128)
            window.alert("Wise guy, huh?");
        else    
            window.confirm("Needza a lowercase lett-ah?", lowercase);
                if (lowercase === true) {
                    
                }
            window.confirm("Howza about an uppercase lett-ah?", uppercase);
            window.confirm("Whatza about a numb-uh?", numbers);
            window.confirm("Oneza dem 'special characters'?", specialCha);
            return;
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 0. create an array with math.random that holds special characters.
// 1. we need to build generatePassword function;
// 2. generatePassword ();
    //Button gets clicked:
        //Enter minimum number of characters? Takes input ("MIN 8 - MAX 128"), prompt();
            //if (var i <= 7 || i >= 128) {
                //Are you threatning me?
            //else
        //Need a lowercase letter? confirm();
            //if yes, inlcude lower case characters
            //else, continue, return?
        //How about uppercase letter? confirm();
            //if yes, include uppercase in generation
            //else
        //What about a number? confirm();
            //if yes, inlcude numbers 0-9;
            //else
        //One of them special characters? confirm();
            //if yes, include ALL;
            //else
        //return;
    //}
//  3. Display new password either in an alert on in textbox
        //alert("your new password is" + generatePassword(password);) 


// var wins = 0;
//     loses = 0;
//     ties = 0;

// let options = ["Rock", "Paper", "Scissors"];
// let playGame = function () {
//     let userChoice = window.prompt("Enter Rock, Paper, or Scissors");
//     }
// if (!userChoice) {
//     return;
//     } 
// userChoice = userChoice.toUpperCase();

// let index = Math.floor(Math.random() * option.length);
// let computerChoice = options[index];
// window.alert("the computer chose " + computerChoice);

// if (userChoice === computerChoice) {
//     ties++;
//     window.alert("tie");
//     else if (
//      (userChoice === "R" && computerChoice === "S");
//      (userChoice === "P" && computerChoice === "R");
//      (userChoice === "S" && computerChoice === "P");
//     )
//     wins++;
//     window.alert ("WINNER");

//     let playAgain = window.confirm("play again");

//     if (playAgain) {
//         playGame();
//     }
// }

