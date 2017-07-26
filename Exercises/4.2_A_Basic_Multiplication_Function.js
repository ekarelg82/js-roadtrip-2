// Video 4.1 accompanies this exercise

// Build a function declaration called multiplyTrio that takes in three
// parameters. Inside the function, multiply the numbers together into one
// product, and return the result. You may use whatever parameter and variable
// names you’d like.
// function shout(message) {
//   console.log(message.toUpperCase() + '!!!');
// }
//
// function plusTwo(number) {
//   let newNumber = number + 2
//   console.log(newNumber);
// }
//
// let eat = function(food) {
//   return food + ' Nom nom nom'
// }
//
// let swallow = eat
//
// shout('i like turtles')
// plusTwo(7)
// plusTwo(-4)
// plusTwo(5)
//
// let message = eat('bread')
////////////////////////////////////////////////////////////////
// function plusFive(number) {
//   let finalNumber = number + 5
//   // return `The final number is ${finalNumber}`
//   return finalNumber
// }
//
// let age = 66
//
// console.log( plusFive(7));
// console.log( plusFive(12));
// console.log( plusFive(-5));
// console.log( plusFive(age));
//
// let ageIn5Years = plusFive(34)
//
// console.log( 'My age is 5 years is ' + ageIn5Years );

///////////////////////////////////////////////////////
// function sandwitchSlicer(sandwitch) {
//   console.log('slicing your sandwitch. Please wait');
//   return `Your ${sandwitch} sandwitch is now cut in half\n`
// }
// console.log( sandwitchSlicer('Ham & Eggs'));
// console.log( sandwitchSlicer('Cubano'));
// console.log( sandwitchSlicer('Mayonaise'));

/////////////////////////////////////////////////////////
// let insulter = function(name) {
//   return `Presiden Trump ${name}`
// }
//
// console.log( insulter ('luck like cat'));

///////////////////////////////////////////////////////////

// function add(num1, num2){
//   return num1 + num2
// }
//
// console.log( add(2, 2));
// console.log( add(2, -2));
// console.log( add(5, 7));
// console.log( add(5, '5'));

////////////////////////////////////////////////////////////////

// function subtract(num1, num2){
//   return num1 - num2
// }
// console.log( subtract(2, 2));
// console.log( subtract(2, -2));
// console.log( subtract(5, 7));
// console.log( subtract(5, '5'));

//////////////////////////////////////////////////////////////////

function multiplyTrio(parm1, parm2, parm3){
  return parm1 * parm2 * parm3
}

console.log( multiplyTrio(2, 2, 3));
console.log( multiplyTrio(2, -2, 8));
console.log( multiplyTrio(5, 7, 6));
console.log( multiplyTrio(5, 5, 12));
