# PRD — Katalog Buku Sederhana

## Tujuan
Website katalog buku statis yang menampilkan daftar buku dan mengarahkan pengunjung ke WhatsApp untuk bertanya.

## Pengguna
Pengunjung umum yang ingin mengetahui informasi buku dan menghubungi penjual.

## Fitur MVP [SELESAI]

### Daftar Buku ✅
- Tampilkan kartu buku (card) berisi:
  - Cover buku (gambar)
  - Judul buku
  - Deskripsi singkat

### Tombol "Tanya Buku Ini" ✅
- Setiap kartu buku memiliki tombol ini.
- Saat diklik, buka WhatsApp dengan pesan otomatis:
  `Halo, saya mau bertanya mengenai buku ini.`
- Format URL WhatsApp: `https://wa.me/<nomor>?text=<pesan>`

---

## Fitur Tambahan [SELESAI]

### Tambah Buku ✅
- Form dengan field: Judul (wajib), Penulis, Deskripsi (wajib)
- Validasi sisi klien sebelum data disimpan
- Input pengguna di-escape untuk mencegah XSS

### Hapus Buku ✅
- Tombol Hapus pada setiap kartu buku
- Grid diperbarui langsung setelah penghapusan

### Upload Cover Buku ✅
- Input file gambar pada form tambah buku
- Preview gambar tampil sebelum buku disimpan
- Gambar disimpan sebagai base64 di `localStorage`
- Fallback ke `placeholder.svg` jika tidak ada gambar

### Penyimpanan localStorage ✅
- Data buku dimuat dari `books.json` pada kunjungan pertama
- Semua perubahan disimpan ke `localStorage`
- Data tetap ada setelah refresh halaman

---

## Tidak Termasuk
- Harga
- Keranjang belanja
- Checkout & pembayaran online
- Login pengguna

## Stack Teknis
- HTML + CSS + JavaScript (static site, tanpa framework)
- Data awal dari `data/books.json`, perubahan disimpan di `localStorage`
- Tidak memerlukan backend atau database

## Kriteria Selesai ✅
- Semua buku tampil dengan cover, judul, dan deskripsi.
- Tombol WhatsApp membuka chat dengan pesan yang sudah terisi.
- Tampilan responsif (mobile-friendly).
- Buku dapat ditambah dan dihapus langsung dari halaman.
- Cover buku dapat diunggah dan dipreview sebelum disimpan.
- Data persisten via `localStorage`.
