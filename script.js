// Assignment code here -  Name all veriables
var special = '!"#$%&()*+,-./:;<>=?@[]{}\~';
var numbers = "0,1,2,3,4,5,6,7,8,9;"
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 0;
var password = "";
var useSpecial = false;
var useNumbers= false; 
var useLowercase = false;
var useUppercase = false;
var passwordChoices = "";

// Prompts for user 
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = window.prompt ("How long would you like the password to be? Choose a length between 8 and 128 characters.");
  passwordLength = passwordLength.isInteger;
}

var wantSpecial = prompt("Would you like to include special characters?");
var wantNumbers = prompt("Would you like to include numbers?");
var wantLowercase = prompt("Would you like to include lowercase letters?");
var wantUppercase = prompt("Would you like to include uppercase letters?");

//Conditionals for prompt answers - boolean
if (wantSpecial === "yes") {
  useSpecial == true;
};
if (wantNumbers === "yes") {
  useNumbers == true;
};
if (wantLowercase === "yes") {
  useLowercase == true;
};
if (wantUppercase === "yes") {
  useUppercase == true;
};

//Conditionals for prompt answers - responses if selected
if (useSpecial === true){
  passwordChoices += special;
}
if (useNumbers === true){
  passwordChoices += numbers;
}
if (useLowercase === true){
  passwordChoices += lowercase;
}
if (useUppercase === true){
  passwordChoices += uppercase;
}

function randomCharacters(passwordLength) {
  return Math.floor(Math.random() * passwordLength +1);
}

function generatePassword(){
for(var i=0; i < passwordLength; i+= 1) password += i; {
  password += passwordChoices[randomCharacters(passwordChoices.length)];
}
return password;
}

//Get references to the generate element
var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
