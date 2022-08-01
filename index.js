let employeeTable = document.querySelector('#table');


let employeeData = [
    {name: 'James', id: 546546, email:'hddhk@gmail.com'},
    {name: 'James', id: 546546, email:'hddhk@gmail.com'},
    {name: 'James', id: 546546, email:'hddhk@gmail.com'},
    {name: 'James', id: 546546, email:'hddhk@gmail.com'},
]


let tableTitles = ['Name', 'ID', 'Email'];

const createTable = () => {
    let table = document.createElement('table');
    let rowTitle = document.createElement('tr');

    tableTitles.forEach(titleText => {
    let title = document.createElement('th');
    let textNode = document.createTextNode(titleText);
    title.appendChild(textNode);
    rowTitle.appendChild(title);
});

table.appendChild(rowTitle);

employeeData.forEach(employee => {
    let tableRow = document.createElement('tr');

    Object.values(employee).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        tableRow.appendChild(cell);
    })

    table.appendChild(tableRow);
});

employeeTable.appendChild(table);
}

createTable();