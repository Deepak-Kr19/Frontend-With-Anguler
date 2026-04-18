// var vs let vs const
// var is function-scoped, while let and const are block-scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let and const are only accessible within the block they are defined in.

// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x); // Output: 2 (var is function-scoped)
//     }
//     console.log(x); // Output: 2 (var is function-scoped)
// }
// varTest();

function letTest() {
    // let y = 1;
    if (true) {
        let y = 2;
        console.log(y); // Output: 2 (let is block-scoped)
    }
    console.log(y); // Output: 1 (let is block-scoped)
}
letTest();

// function constTest() {
//     const z = 1;
//     if (true) {
//         const z = 2;
//         console.log(z); // Output: 2 (const is block-scoped)
//     }
//     console.log(z); // Output: 1 (const is block-scoped)
// }
// constTest();

