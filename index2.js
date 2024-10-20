// Menghasilkan angka acak antara 1 dan 10
const angkaRahasia = Math.floor(Math.random() * 10) + 1;

// Meminta pengguna untuk menebak
const tebakan = parseInt(prompt("Tebak angka antara 1 sampai 10:"));

// Memeriksa tebakan
if (tebakan === angkaRahasia) {
    alert("Tebakan Anda benar!");
} else {
    alert("Tebakan Anda salah! Angka yang benar adalah: " + angkaRahasia);
}
