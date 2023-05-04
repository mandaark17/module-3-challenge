// Assignment code here
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppeCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"; 
var specialChars = "#$%^&*()_+{}[];:<>,!@.?/|";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Develop min/max for Math function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Gen a password to the writePassword function
function generatePassword() {

// Min/Max character length
  var passLength = window.prompt("Ent-ah a numb-uh between 8 and 128", passLength);
  var genPassword = "";
  var charPool = ""

// Filtering password criteria
  if (passLength <= 7 || passLength >= 129) {
    window.alert("Wise guy, huh? Do it again, see what happens.");
    return "";
  }
  else {
    var lower = window.confirm("Need some lowercase lett-ahs?");
    if (lower === true) {
      charPool += lowerCaseChars
    }
    var upper = window.confirm("Howza about uppercase lett-ahs?");
    if (upper === true) {
      charPool += uppeCaseChars
    }
    var num = window.confirm("Whatza about some numb-uhs?");
    if (num === true) {
      charPool += numbers
    }
    var special = window.confirm("Oneza dem uh, 'special characters'?");
    if (special === true) {
      charPool += specialChars
    }

    for (var i = 0; i < passLength; i++) {
      // generate a random index between 0 and the charPool length
      randomIndex = getRandomInt(0, charPool.length);
      // get the charPool character at the randomIndex position
      var randomChar = charPool[randomIndex];
      // add the randomChar to the genPassword
      genPassword += randomChar;
    }
    return genPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);