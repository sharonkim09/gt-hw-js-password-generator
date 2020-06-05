// Assignment Code
var generateBtn = document.querySelector("#generate");


//ask user for length of password
var lengthOfPassword = prompt("How long do you want your password?");
if(lengthOfPassword < 8 || lengthOfPassword >128){
  alert("Password Length must be between 8 and 128 characters");
}else if(isNaN(lengthOfPassword)){
  alert("Invalid input! Try again")};

//declare the variables used
var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters=["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
