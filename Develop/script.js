// Assignment code here
var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCase = "0123456789";
var specCase = "!@#$%^&*()_+<>:;<>[]{}~`";
var allChar = "";
var typesArr = "";
var randomNumber = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// length confirmation
var generatePassword = function () {{
  var lengthChars = window.prompt ("How many characters would you like your password to be? Please choose between 8 - 150.")
  if (lengthChars > 7 && lengthChars <= 150) {
    alert("Alright, we'll generate a password for you that is " + lengthChars + " characters.")
  }
  else {(alert("Please enter a number between 8 and 150."));
  generatePassword()};
}

// character confirmation - lowercase
var lowerChoice = window.confirm("Would you like lowercase letters in your password?");
if(lowerChoice) {
  alert("Lowercase letters will be included.");
allChar += lowerCase;
}
else {
  alert("You will have no lowercase letters in your password.");
}

// character confirmation - uppercase
var upperChoice = window.confirm("Would you like uppercase letters in your password?");
if(upperChoice) {
  alert("Uppercase letters will be included.");
allChar = upperCase + allChar;
}
else {
  alert("You will have no uppercase letters in your password.");
}

// character confirmation - number
var numberChoice = window.confirm("Would you like numbers in your password?");
if(numberChoice) {
  alert("Numbers will be included.");
allChar += numberCase;
}
else {
  alert("You will have no numbers in your password.");
}

// character confirmation - spec chars
var specialChoice = window.confirm("Would you like special characters in your password?");
if(specialChoice) {
  alert("Special characters will be included.");
allChar += specCase;
}
else {
  alert("You will have no special characters in your password.");
}

if (allChar) {
  alert("Alright, we'll generate something for you!");
}
else {
  alert("No criteria has been selected.");
}

var temp = new Array();
for (let i = 0; i < lengthChars; i++) {
  randomNumber = Math.floor(Math.random() * allChar.length);
  numbArray = allChar[randomNumber];
  temp.push(numbArray);
}
password=temp.join( " " );
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
