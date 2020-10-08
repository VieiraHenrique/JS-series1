// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)


const target = document.getElementById('target');
const table = document.createElement('table');
target.appendChild(table);


function tableGen(elements) {
    for (let i = 1; i <= elements; i++) {
        row(elements, i);
    }
}

function row(columns, factor) {
    const tr = document.createElement('tr');
    for (let i = 1; i <= columns; i++) {
        const td = document.createElement('td');
        td.innerHTML = `${factor*i}`;
        tr.appendChild(td);
        table.appendChild(tr)
    }
}

tableGen(10);