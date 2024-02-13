function submitForm() {
    var nama = document.getElementById('nama').value;
    var dendaTotal = 0;
    var penjaraTotal = 0;
    var history = document.getElementById('history');

    // Inisialisasi string untuk riwayat
    var historyEntry = '';

    // Menghitung jumlah denda dan penjara yang dicentang
    var checkboxes = document.querySelectorAll('.CEKLIS:checked');
    checkboxes.forEach(function(checkbox) {
        var row = checkbox.parentNode.parentNode;
        var uuText = row.cells[0].innerText;
        var nilaiDenda = parseInt(row.cells[3].innerText);
        var nilaiPenjara = parseInt(row.cells[4].innerText);
        dendaTotal += nilaiDenda;
        penjaraTotal += nilaiPenjara;

        // Menambahkan UU ke string riwayat
        if (historyEntry !== '') {
            historyEntry += ', ';
        }
        historyEntry += uuText;
    });

    // Menambahkan denda total dan penjara total ke dalam string riwayat
    historyEntry += ' ' + dendaTotal + ' ' + penjaraTotal;

    // Menambahkan entri ke dalam riwayat di bawah yang sebelumnya
    var newEntry = document.createElement('div');
    newEntry.textContent = historyEntry;
    history.prepend(newEntry);

    // Memperbarui nilai input denda dan penjara
    document.getElementById('denda').value = dendaTotal;
    document.getElementById('penjara').value = penjaraTotal;

    // Mereset centangannya
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}