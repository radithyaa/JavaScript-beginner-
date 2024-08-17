function updateClock() {
  const now = new Date(); // Mendapatkan waktu saat ini
  let hours = now.getHours(); // Mengambil jam saat ini
  const meridiem = hours >= 12 ? "PM" : "AM"; // Menentukan AM/PM

  // Menghitung jam dalam format 12 jam
  hours = hours % 12 || 12; // Mengubah jam menjadi 12 jam, dengan 0 menjadi 12
  hours = hours.toString().padStart(2, "0"); // Menambahkan nol di depan jika perlu

  // Mengambil menit dan detik
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Menambahkan nol di depan menit
  const seconds = now.getSeconds().toString().padStart(2, "0"); // Menambahkan nol di depan detik

  // Membuat string waktu
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

  // Memperbarui elemen dengan ID 'clock' di HTML
  document.getElementById("clock").textContent = timeString;
}

// Memperbarui jam awal
updateClock();
// Mengatur interval untuk memperbarui jam setiap detik
setInterval(updateClock, 1000);
