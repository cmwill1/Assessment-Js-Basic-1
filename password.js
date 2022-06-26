//Create a variable called password and set it’s value to a string of your choice. The instructions state to make 10 characters long and include at least one letter and one number.

//Code here
var password ="coding1sfn"
if (password< 10 && password <[0-9]) {
    console.log("fails")
  } else {
    console.log("success")
  }

//   Check for prescence of upper case letters in password and check for forbidden word "password"
const words = password.split(' ');
console.log(words[0]);


// Add ASCII Art to project below: 

  artWork=`
  .__             .__   .__           
  |  |__    ____  |  |  |  |    ____  
  |  |  \ _/ __ \ |  |  |  |   /  _ \ 
  |   Y  \\  ___/ |  |__|  |__(  <_> )
  |___|  / \___  >|____/|____/ \____/ 
       \/      \/                     
  `

console.log(artWork)