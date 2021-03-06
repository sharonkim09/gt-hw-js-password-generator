// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //ask user for length of password
  var lengthOfPassword = prompt("How long do you want your password?");
  if(lengthOfPassword < 8 || lengthOfPassword >128){
    alert("Password Length must be between 8 and 128 characters");
  }else if(isNaN(lengthOfPassword)){
    alert("Invalid input! Try again!");
  }

  //declare values of variables
  else{
    var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numericCharacters=["0","1","2","3","4","5","6","7","8","9"];
    var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    //Ask user if they want to use
    var lowerCase = confirm("Do you want lower case characters?");
    var upperCase = confirm("Do you want upper case characters?");
    var numeric = confirm("Do you want numeric characters?")
    var special = confirm("Do you want special characters?");

    //When user selects type, pushed into empty array 
    var userSelection = [];
    if(lowerCase){
      var userSelection =userSelection.concat(lowerCaseLetters);
    }
    if(upperCase){
      var userSelection=userSelection.concat(upperCaseLetters);
    }
    if(numeric){
      var userSelection=userSelection.concat(numericCharacters);
    }
    if(special){
      var userSelection=userSelection.concat(specialCharacters);
    }
    //user needs to select at least one type
    if(userSelection.length===0){
      alert("You must select at least one character type! Try again!")
    }

    //generate password based on user selection 
    var password = [];
    for(var i =0; i<lengthOfPassword;i++){
      var x = Math.floor(Math.random() * userSelection.length);
      var password = password.concat(userSelection[x]);
    }
  }
  //Combines newly generated password in array as string
  return password = password.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
