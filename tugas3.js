// Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinnya adalah:
// Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
// Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
// Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah ditambah 4 dari umur manusia ketika 24  tahun. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalender tahun kucing, umurnya adalah 32 tahun.
// Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.
let umurKucing = (umur) => {
  if (umur == 1) {
    return 15;
  } else if (umur == 2) {
    return 24;
  } else if (umur >= 3) {
    return 24 + 4 * (umur - 2);
  }
};

console.log(umurKucing(1));
