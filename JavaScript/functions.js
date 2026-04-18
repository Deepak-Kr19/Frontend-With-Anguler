//Nested Function - A function defined inside another function is called a nested function. The inner function can access the variables and parameters of the outer function.

function outerFunction() {
  let outerVariable = "I am the outer variable.";
    function innerFunction() {
        let innerVariable = "I am the inner variable.";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable); // Accessing inner variable
    }   
    innerFunction(); // Calling the inner function
}
outerFunction(); // Calling the outer function



function parent(value3, value4) {
    return function child(value1, value2) {
        return value1 + value2 + value3 + value4;
    }   
}

let result = parent(5, 10)(2, 3);   //function curying - a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. In this example, the parent function takes two arguments (value3 and value4) and returns the child function, which takes two arguments (value1 and value2) and returns the sum of all four values. The result of calling parent(5, 10)(2, 3) will be 20 (5 + 10 + 2 + 3).
console.log(result); 
