/*
Nama    : Shafa Sabilillah
NIM     : 250302094
Kelas   : TI-2C
*/

const inputNama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombol-sapa");
const pesanSapa = document.getElementById("pesan");

const nilaiNama = inputNama.value;

tombolSapa.addEventListener("click", function () {
    if (nilaiNama === "") {
        pesanSapa.textContent = "Nama belum diisi.";
    } else {
        pesanSapa.textContent = "Selamat belajar, " + nilaiNama + "!";
    }
});