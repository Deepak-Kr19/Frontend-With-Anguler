// Object Array
// An array of objects is a data structure that allows you to store multiple objects in a single variable. Each object can have its own properties and values, making it a powerful way to organize and manage data.
// In JavaScript, you can create an array of objects using square brackets [] and curly braces {}. Each object can represent a different entity with its own set of properties. For example, you can create an array of student objects, where each student has properties like name, age, and marks.
let students = [
  {
    name: "Deepak",
    marks: {
      math: 90,
      science: 85,
      english: 88
    }
  }
];
console.log(students); 
console.log(students[0].name); // Accessing the name of the first student
console.log(students[0].marks.math); // Accessing the math marks of the first student
// You can also add more student objects to the array
students.push({
  name: "Priya",
    marks: {
        math: 92,
        science: 89,
        english: 91
    }
});
console.log(students);

//add a subject to the marks of the first student
students[0].marks.history = 80;
console.log(students[0].marks);

//update the marks of the second student
students[1].marks.math = 95;
console.log(students[1].marks);

//remove the english marks of the first student
delete students[0].marks.english;
console.log(students[0].marks);

