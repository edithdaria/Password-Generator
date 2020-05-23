
// Assignment Code
var form = document.querySelector("#passwordGeneratorForm");
var numberInput = document.querySelector("#passwordLength")
var numbersBox = document.querySelector("#numbers");
var upperCaseBox = document.querySelector("#upperCase");
var symbolsBox = document.querySelector("#symbols");
var passwordText = document.querySelector("#password");


//assignment of ASCII charcodes
var lowerCaseChars = arrayASCII(97, 122);
var upperCaseChars = arrayASCII(65, 90);
var numberChars = arrayASCII(48, 57);
var symbolChars = arrayASCII(33, 47).concat(arrayASCII(58, 64)).concat(arrayASCII(91, 96)).concat(arrayASCII(123, 126));

// Add event listener to generate button

form.addEventListener("submit", writePassword);

//generateBtn.addEventListener("submit", writePassword);
numberInput.addEventListener("input", passwordLength);

function passwordLength(e) {
  var value = e.target.value;
  numberInput.value = value;
}

// Write password to the #password input
function writePassword(e) {
  e.preventDefault();
  var characterNum = Number(numberInput.value);
  if (!(Number.isInteger(characterNum) && characterNum >= 8 && characterNum <= 128)) characterNum = 8;
  var upperCase = upperCaseBox.checked;
  var numbers = numbersBox.checked;
  var symbols = symbolsBox.checked;
  var password = generatePassword(characterNum, numbers, upperCase, symbols);
  passwordText.value = password;
}

// generate password based on criteria
function generatePassword(characterNum, numbers, upperCase, symbols) {
    // All the possible charactercodes we can generate
    var charCodes = lowerCaseChars;
    if (upperCase) charCodes = charCodes.concat(upperCaseChars);
    if (numbers) charCodes = charCodes.concat(numberChars);
    if (symbols) charCodes = charCodes.concat(symbolChars);

    var passwordChars =[];
    //loop for all possible number of characters for password
    for (var i = 0; i < characterNum; i++) {
        var char = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordChars.push(String.fromCharCode(char));
    }
    return passwordChars.join('');
}

//function to loop through all ASCII characters
function arrayASCII(low, high){
  var array = [];
  for( var i=low; i<=high; i++ ){    
    array.push(i);
  }
  return array;
}









