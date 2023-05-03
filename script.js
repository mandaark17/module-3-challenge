// Assignment code here
// Slice and Split string into array to hold all characters
var charset = 
`${"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[];:<>,.?/|\\".slice(0, 88)}`.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Gen a password to the writePassword function
function generatePassword() {

// Min/Max Character Length
    var length = window.prompt("Ent-ah a numb-uh between 8 and 128", length);
    var genPassword = "";

// Filtering password criteria
    if (length <= 7 || length >= 129) {
        window.alert("Wise guy, huh? Do it again, see what happens.");
        return;
            }
    else{
        var lower = window.confirm("Need some lowercase lett-ahs?");
            if (lower === true) {
                genPassword += charset[0, 26];
            }
        var upper = window.confirm("Howza about uppercase lett-ahs?");
            if (upper === true) {
                genPassword += charset[27, 52];
            }
        var num = window.confirm("Whatza about some numb-uhs?");
            if (num === true) {
                genPassword += charset[53, 62];
            }
        var special = window.confirm("Oneza dem uh, 'special characters'?");
            if (special === true) {
                genPassword += charset[62, 88];
            }
        for (var i = 0, i < length, i++) {
            index = Math.floor(Math.random() * genPassword.length);
        }
        return genPassword[index];   
       }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

