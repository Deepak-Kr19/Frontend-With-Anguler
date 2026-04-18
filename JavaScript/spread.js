//spread operator
// The spread operator in JavaScript is a powerful syntax that allows you to expand elements of an iterable (like an array or object) into individual elements. It is denoted by three dots (...). The spread operator can be used in various contexts, such as function calls, array literals, and object literals.

// Example 1: Using spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spreading arr1 into arr2
console.log(arr2); // Output: [1, 2, 3, 4, 5]



// Example 2: Using spread operator with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; 
console.log(obj2); 

//destructuring
// Destructuring is a convenient way of extracting values from arrays or properties from objects into distinct variables. It allows you to unpack values from arrays or properties from objects into separate variables in a more concise and readable way.
let arr = [10, 20, 30];
let [x, y, z] = arr;
console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30

//destructuring with spread operator
let arr3 = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr3;
console.log(first); // Output: 1
console.log(second);
console.log(rest); // Output: [3, 4, 5]


//object destructuring
let obj3 = { a: 1, b: 2, c: 3 };
let { a, ...remaining } = obj3;
console.log(a); // Output: 1
console.log(remaining); // Output: { b: 2, c: 3 }

//nested destructuring
let nestedArr = [1, [2, 3], 4];
let [num1, [num2, num3], num4] = nestedArr;
console.log(num1); // Output: 1
console.log(num2); // Output: 2
console.log(num3); // Output: 3
console.log(num4); // Output: 4

//nested object destructuring
let nestedObj = { a: 1, b: { c: 2, d: 3 } };
let { a: numA, b: { c: numC, d: numD } } = nestedObj;
console.log(numA); // Output: 1
console.log(numC); // Output: 2
console.log(numD); // Output: 3

//nested destructuring 

