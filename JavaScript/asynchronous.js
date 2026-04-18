//setInterval

// let count = 0;
// let intervalId = setInterval(() => {
//     count++;
//     console.log("Count: " + count);
//     if (count >= 5) {
//         clearInterval(intervalId); // Stop the interval after 5 counts 
//     }
// }, 2000);



//setTimeout

// setTimeout(() => {
//     console.log("This message is displayed after 3 seconds.");
// }, 3000);


// Asynchronous function using Promises
// Asynchronous programming allows you to perform tasks without blocking the main thread of execution. Promises are a way to handle asynchronous operations in JavaScript. A Promise represents a value that may be available now, in the future, or never. It can be in one of three states: pending, fulfilled, or rejected.




function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Deepak Kumar" };
            resolve(data); // Simulating successful data retrieval
        }, 2000);
    }
);  
}

fetchData()
    .then(data => {
        console.log("Data fetched:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    })
    .finally(() => {
        console.log("Fetch operation completed.");
    });
