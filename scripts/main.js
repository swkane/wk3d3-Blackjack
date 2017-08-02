/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// let test = ["2", "4"];
function handValue (hand) {
// Start a new array that will hold numerical values rather than cards
const array = [];
// initialize a variable to hold the working handtotal = 0;
let handTotal = 0;
let card1 = 0;
// parse through the first item in the array and item in array
for (var i = 0; i < hand.length; i++) {
  if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
    card1 = 10;
    array.push(card1);
  } else if (hand[i] === "A") {
    // if handTotal += 11 > 21, card1 = 1; else card1 = 11
    if (handTotal + 11 > 21) {
      card1 = 1;
    } else {
      card1 = 11;
    }
    array.push(card1);
  } else {
    card1 = parseInt(hand[i]);
    array.push(card1);
  }
  handTotal += card1;
}
return (handTotal);
}

// console.log(handValue(["3"]));
// console.log(handValue(["2","2","8"]));
// console.log(handValue(["2","2","K"]));
// console.log(handValue(["2","A","K"]));





/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
