function searchTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('doctor-table');
    const rows = table.querySelectorAll('tbody tr'); // Select only rows in the table body

    rows.forEach(row => {
        const nameCell = row.querySelector('td:nth-child(2)'); // Select the 2nd cell (Name)
        if (nameCell) {
            const name = nameCell.textContent.toLowerCase();
            if (name.indexOf(searchInput) > -1) {
                row.style.display = ''; // Show row if it matches
            } else {
                row.style.display = 'none'; // Hide row if it doesn't match
            }
        }
    });
}