
// Write a conditional statement that checks the password meets the following
// At least 10 characters long
// Contains at least one letter and one number
//then add 2 other variables to check of your choosing. 
//Contains uppercase letters
//Contains less than 20 charactersgit

const password = "coding1sfn"
var count =0;
count += /[a-z]/.test(password) ? 1 : 0;
if (count >=10){
    console.log('success')
    }
count +=/\d/.test(password) ? 1 : 0;
if(count>1){
    console.log('success')
} count +=/[A-Z]/.test(password)? 1 : 0;
if(count>1){
    console.log("fail")
}count +=/(characters>20)/.test(password) ?1 : 0;
if(count>1){
    console.log('fail')
}

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