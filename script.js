const checkboxes = document.querySelectorAll('.CEKLIS');
const dendaValues = [1500, 2000, 3500, 3000, 3000, 4000, 2500];
const penjaraValues = [10, 16, 16, 16, 10, 15, 10];

function calculateTotal() {
    let totalDenda = 0;
    let totalPenjara = 0;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            totalDenda += dendaValues[index];
            totalPenjara += penjaraValues[index];
        }
    });

    document.getElementById('denda').value = `Denda: ${totalDenda}`;
    document.getElementById('penjara').value = `Penjara: ${totalPenjara}`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotal);
});

function submitForm() {
    var nama = document.getElementById('nama').value;
    var checkedItems = [];
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            checkedItems.push(` ${checkbox.parentElement.parentElement.cells[0].textContent}`);
        }
    });

    var historyDiv = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.textContent = `Nama: ${nama}, ${checkedItems.join(', ')}`;
    historyDiv.appendChild(historyItem);
}