// let input = prompt("Enter a character (number or string):");

// let num = input.charCodeAt(0);num


// if (num >= 48 && num <= 57) {
//     document.write("It's a number.");
// } else if (num >= 65 && num <= 90) {
//     document.write("It's an uppercase letter.");
// } else if (num >= 97 && num <= 122) {
//     document.write("It's a lowercase letter.");
// } else {
//     document.write("It's neither a number nor a letter.");
// }

// let input = Number(prompt("Enter the first interger"))
// let input2 = Number(prompt("Enter the Second interger"))
// if(input > input2){
// document.write("The larger number is : " + input)
// }
// else if (input2 > input){
//     document.write("The larger number is : " + input2)
// }
// else{
//     document.write("Both are same")
// }

// let num = Number(prompt("Enter a number: "))
// if (num > 0){
//     document.write("The number is positive")
// }
// else if(num < 0){
//     document.write("The number is negative")
// }
// else {
//     document.write("The number is 0")
// }

// let vowels = prompt("Enter a character:");
// if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
//     document.write("True: It is a vowel.");
// } 
// else {
//     document.write("False: It is not a vowel.");
// }

// let pass = prompt("Enter a password");
// let actualPass = "Hassaan123";
// if (pass = null){
//     document.write("Enter your password")
// }
// else if (pass = actualPass){
//     document.write("Correct! Password")
// }
// else if(pass != actualPass){
//     document.write("Incorrect! Password")
// }

// var greeting; 
// var hour = 13; 
// if (hour < 18) {
// document.write(greeting = "Good day")
// }
// else{ 
//     document.write(greeting = "Good evening")}


let time = prompt("Enter time in 24-hour format (HHMM):");
let hours = Math.floor(time / 100);
let minutes = time % 100;

if (hours >= 0 && hours < 12) {
    console.log(`${hours === 0 ? 12 : hours}:${minutes < 10 ? '0' + minutes : minutes} AM`);
} else if (hours >= 12 && hours < 24) {
   document.write(`${hours === 12 ? 12 : hours - 12}:${minutes < 10 ? '0' + minutes : minutes} PM`);
} else {
    document.write("Invalid time.");
}
