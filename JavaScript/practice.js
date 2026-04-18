let arr = [[1,2,3],[4,5,6],{
    name: "Deepak",
    obj2:{
        city: "Delhi",
    },
},(a,b) => a+b];

//destructuring above array
// let [arr1, arr2, obj1, func] = arr;
// console.log(arr1); // Output: [1, 2, 3]
// console.log(arr2); // Output: [4, 5, 6]
// console.log(obj1); // Output: { name: "Deepak", obj2: { city: "Delhi" } }
// console.log(obj1.obj2); // Output: { city: "Delhi" }
// console.log(func(10, 20)); // Output: 30

let [[a, b, c], [d, e, f], { name, obj2: { city } }, func] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(name);
console.log(city);
console.log(func(10, 20));