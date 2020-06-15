// Assignment code here
function generatePassword() {
  var passwordLength = window.prompt("Enter the length of your password. (Between 8 and 128 characters)");
  var lengthInteger = parseInt(passwordLength, 10);
  console.log(lengthInteger);
  if (lengthInteger >= 8 && lengthInteger <= 128) { 
    var lowerCase = window.confirm("Would you like your password to contain lower case letters? Select 'cancel' for no.");
    var upperCase = window.confirm("Would you like your password to contain UPPER CASE letters? Select 'cancel' for no.");
    var passNumbers = window.confirm("Would you like your password to contain numbers? Select 'cancel' for no.");
    var specialCharacters = window.confirm("Would you like your password to contain special characters? Select 'cancel' for no.");

    if (lowerCase) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      var lowerCase = null;
    }

    if (upperCase) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      var upperCase = null;
    }

    if (passNumbers) {
      var passNumbers = "0123456789";
    } else {
      var passNumbers = null;
    }

    if (specialCharacters) {
      var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    } else {
      var specialCharacters = null;
    }

    function makePass(length) {
      var result = '';
      var characters = lowerCase + upperCase + passNumbers + specialCharacters;
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
   return makePass(lengthInteger);


  } else {
    var invalidNumber = window.confirm("Please enter a number between 8 and 128");
    if (invalidNumber) {
      generatePassword();
    }
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
