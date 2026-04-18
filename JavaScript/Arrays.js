// JavaScript Arrays
// An array is a data structure that can hold multiple values of different types.
// Arrays are ordered, meaning that the elements have a specific order and can be accessed using their index (starting from 0).
// Arrays can be created using square brackets [] and can contain any type of data, including numbers, strings, objects, and even other arrays.
let fruits = ["Apple", "Banana","Orange", "Cherry"];

console.log(fruits.length); 
console.log(fruits[0]);

fruits.push("Grapes");          //Add an element at the end of the array
console.log(fruits);

fruits.unshift("Mango");        //Add an element at the beginning of the array
console.log(fruits);

fruits.pop();                   //Remove the last element
console.log(fruits);

fruits.shift();                 //Remove the first element
console.log(fruits);


//Splice method to add or remove elements at a specific index
//Syntax: array.splice(start, deleteCount, item1, item2, ...)

fruits.splice(1, 0, "Kiwi"); //Add "Kiwi" at index 1 without removing any element
console.log(fruits);

fruits.splice(2, 1, "abcd"); //Remove 1 element at index 2 and add "abcd"
console.log(fruits);


//merging two arrays using concat method
let vegetables = ["Carrot", "Broccoli"];
let food = fruits.concat(vegetables);
console.log(food);

//objects in arrays
let people = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 35}
];

