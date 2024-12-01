
const rowsInput = document.getElementById('rowsInput');
const cellsInput = document.getElementById('cellsInput');
const contentInput = document.getElementById('contentInput');
const generateBtn = document.getElementById('generateBtn');
const tableContainer = document.getElementById('tableContainer');


generateBtn.addEventListener('click', () => {
    const rows = rowsInput.value;
    const cells = cellsInput.value;
    const content = contentInput.value;

    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const cell = document.createElement('td');
            cell.textContent = content; // Встановлюємо вміст комірки
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});