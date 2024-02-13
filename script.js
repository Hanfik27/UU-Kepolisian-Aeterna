// Fungsi untuk menghitung total denda dan total penjara
function hitungTotal() {
    var totalDenda = 0;
    var totalPenjara = 0;

    // Mengambil semua checkbox dengan class "CEKLIS"
    var checkboxes = document.querySelectorAll('.CEKLIS');

    // Loop melalui setiap checkbox
    checkboxes.forEach(function(checkbox) {
        // Jika checkbox dicentang, tambahkan nilai denda dan penjara dari row yang bersangkutan
        if (checkbox.checked) {
            var row = checkbox.parentNode.parentNode; // Dapatkan parent row dari checkbox
            var denda = parseInt(row.cells[3].textContent); // Ambil nilai denda dari kolom ke-4
            var penjara = parseInt(row.cells[4].textContent); // Ambil nilai penjara dari kolom ke-5
            totalDenda += denda;
            totalPenjara += penjara;
        }
    });

    // Mengupdate nilai input dengan total denda dan total penjara
    document.getElementById('denda').value = totalDenda;
    document.getElementById('penjara').value = totalPenjara;
}

// Fungsi yang dipanggil ketika ada perubahan pada checkbox
function checkboxChanged() {
    // Panggil fungsi hitungTotal saat ada perubahan pada checkbox
    hitungTotal();
}

// Fungsi untuk mengirim form (opsional, Anda bisa menyesuaikan ini sesuai kebutuhan Anda)
function submitForm() {
    var nama = document.getElementById('nama').value;
    var denda = document.getElementById('denda').value;
    var penjara = document.getElementById('penjara').value;
    var history = document.getElementById('history');

    // Menambahkan informasi ke dalam history
    var historyItem = document.createElement('div');
    historyItem.textContent = 'Nama: ' + nama + ', Denda: ' + denda + ', Penjara: ' + penjara;
    history.appendChild(historyItem);

    // Reset form setelah submit
    document.getElementById('nama').value = '';
    document.getElementById('denda').value = '';
    document.getElementById('penjara').value = '';
    var checkboxes = document.querySelectorAll('.CEKLIS');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

// Menambahkan event listener untuk setiap checkbox
var checkboxes = document.querySelectorAll('.CEKLIS');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', checkboxChanged);
});