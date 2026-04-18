//decision making
// The ternary operator is a concise way to perform conditional operations in JavaScript. It is often used as a shorthand for simple if-else statements. The syntax for the ternary operator is as follows:
// condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);




let available = true;
let mood = true;
if (available) {
  if (mood) {
    function greet() {
      console.log("Hello! Welcome.");
    }
    greet();
  }

} else {
  function greet() {
    console.log("Sorry");
  }
  greet();
}
