// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


const target = document.getElementById('target');


const table = document.createElement('table');


for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = i + 1;
    tr.appendChild(td);
    table.appendChild(tr);
}

target.appendChild(table);