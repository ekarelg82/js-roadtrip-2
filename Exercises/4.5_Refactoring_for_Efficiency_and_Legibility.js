// Video 4.1 accompanies this exercise

// In the code below, refactor the code inside the function to include only
// one line that returns a value. Then test your new function to make sure it
// returns the same values as the old function.

function mysteryLong(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}

function mysteryShort(x, y) {
  return (4 * x * y) + (3 * y + 5)
}


console.log( mysteryLong(2, 3));
console.log( mysteryShort(2, 3));
