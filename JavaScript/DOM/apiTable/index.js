let table = document.querySelector('#table1');

table.style.border = '2px solid black';
table.style.width = '100%';



async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();

        console.log(data);

        data.forEach(user => {
            let row = document.createElement('tr');

            row.innerHTML = `
                <td style="border: 1px solid black; padding: 8px;">${user.id}</td>
                <td style="border: 1px solid black; padding: 8px;">${user.name}</td>
                <td style="border: 1px solid black; padding: 8px;">${user.username}</td>
                <td style="border: 1px solid black; padding: 8px;">${user.email}</td>
            `;

            table.appendChild(row);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();