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
// initialize a variable to hold the working handtotal = 0;
let handTotal = 0;
// parse through the first item in the array
handTotal += parseInt(hand[0]);
handTotal += parseInt(hand[1]);
handTotal += parseInt(hand[2]);
return (handTotal);
// determine how much to add to handTotal based on this item if statement
}

console.log(handValue(["2","2","8"]));



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
