// Video 4.1 accompanies this exercise

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value. Be careful to think about the possibility of
// equality as well and return one of the numbers. Then test your function
// by calling it with two different numbers and again with two equal numbers.

function maxOf2(parm1, parm2) {
  if (parm1 > parm2){
    return parm1
  }
  else if(parm2 > parm1){
    return parm2
  }
else {
return 'The numbers are equal'
}
}

console.log(maxOf2(7, 200));
console.log(maxOf2(350, 200));
console.log(maxOf2(300, 300));
