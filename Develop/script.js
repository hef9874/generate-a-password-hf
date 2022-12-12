// Assignment code here -  Name all veriables
var symbols = '!"#$%&()*+,-./:;<>=?@[]{}\~';
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 0;
var password = "";
var choose = prompt("Choose a password length.");
var useSpecial = false;
var useNumbers= false; 
var useLowercase = false;
var useUppercase = false;

// Prompts for user 
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength.raw - prompt ("How long would you like the password to be? Choose a length between 8 and 128 characters.");
  passwordLength = +pwLength.raw;
}

var wantSpecial = prompt("Would you like to include special characters?");
var wantNumbers = prompt("Would you like to include numbers?");
var wantLowercase = prompt("Would you like to include lowercase letters?");
var wantUppercase = prompt("Would you like to include uppercase letters?");

//Prompt answers
if (wantSpecial --- "yes") {
 useSpecial = true;
};
if (wantNumbers --- "yes") {
  useNumbers = true;
};
if (wantLowercase --- "yes") {
  useLowercase = true;
};
if (wantUppercase --- "yes") {
  useUppercase = true;
};

var passwordChoices = "";
if (useSpecial == true){
  passwordChoices += symbols;
}
if (useNumbers == true){
  passwordChoices += numbers;
}
if (useLowercase == true){
  passwordChoices += lowerCase;
}
if (useUppercase == true){
  passwordChoices +- uppercase;
}




var generateBtn = document.querySelector("#generate");  

//function for each ver isSoecial = confirm("Do you Want to Allow Special Characters?")
//this.isSpecial = isSpecial

for (var i = 0; i <= passwordLength; i++); {
  var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);

// Write password to the #password input
function geratePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password 
}}
  

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
