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
      var passString = passString + "abcdefghijklmnopqrstuvwxyz";
    } else {
      passString = "";
    }

    if (upperCase) {
      var passString = passString + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (passNumbers) {
      var passString = passString + "0123456789";
    } 

    if (specialCharacters) {
      var passString = passString + "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    } 

    if ((!lowerCase)&&(!upperCase)&&(!passNumbers)&&(!specialCharacters)) {
      var noCategory = window.alert("Please choose at least one category.");
      if (noCategory) {
        generatePassword();
      }
    }

    console.log(passString);

    function makePass(length) {
      var result = '';
      var characters = passString;
      var charactersLength = characters.length;
      console.log(characters)
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
