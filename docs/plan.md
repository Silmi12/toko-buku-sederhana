# plan.md — Rencana Pengembangan

## Phase 0 — Setup & Dokumentasi [SELESAI]
- [x] Buat `docs/PRD.md`
- [x] Buat struktur folder proyek
- [x] Buat semua file docs
- [x] Definisikan Development Agent & Validation Agent
- [x] Tunggu persetujuan sebelum Phase 1

---

## Phase 1 — Struktur HTML Dasar [SELESAI]
**Development Agent:**
- [x] Buat `src/index.html` dengan struktur semantik (header, main, footer)
- [x] Tambah meta tags (viewport, charset, og)
- [x] Link ke `style.css` dan `script.js`

**Validation Agent:**
- [x] Validasi HTML valid (tidak ada tag yang salah)
- [x] Validasi struktur semantik ada
- [x] Status: PASS

---

## Phase 2 — Data Buku [SELESAI]
**Development Agent:**
- [x] Buat `src/data/books.json` dengan minimal 3 buku contoh
  - Fields: `id`, `title`, `description`, `cover`
- [x] Sediakan placeholder cover di `src/assets/images/`

**Validation Agent:**
- [x] Validasi JSON valid dan lengkap
- [x] Validasi semua field ada di setiap buku
- [x] Status: PASS

---

## Phase 3 — Tampilan CSS [SELESAI]
**Development Agent:**
- [x] Buat `src/style.css`
- [x] Desain card buku (cover, judul, deskripsi, tombol)
- [x] Responsif: grid 1 kolom (mobile) → 3 kolom (desktop)

**Validation Agent:**
- [x] Validasi tampilan di lebar 375px dan 1280px
- [x] Validasi tombol terlihat jelas
- [x] Status: PASS

---

## Phase 4 — JavaScript & WhatsApp Integration [SELESAI]
**Development Agent:**
- [x] Buat `src/script.js`
- [x] Fetch dan render `books.json` ke DOM
- [x] Buat fungsi `buildWhatsAppURL(title)` yang membuka wa.me link

**Validation Agent:**
- [x] Validasi buku berhasil dirender ke halaman
- [x] Validasi link WhatsApp terbuka dengan pesan yang benar
- [x] Integration test: klik tombol → WhatsApp terbuka
- [x] Status: PASS

---

## Phase 5 — Final Review & Polish [SELESAI]
**Development Agent:**
- [x] Review keseluruhan
- [x] Pastikan tidak ada fitur di luar PRD

**Validation Agent:**
- [x] Full integration test semua phase
- [x] Status: PASS — siap deploy

---

## Phase 7 — Tombol WhatsApp [SELESAI]
- [x] `WA_NUMBER` sebagai konstanta konfigurasi di `script.js`
- [x] Tombol "Tanya Buku Ini" pada setiap kartu buku
- [x] Pesan otomatis: "Halo, saya ingin bertanya mengenai buku: [Judul]"
- [x] Buka di tab baru (`target="_blank"`)

---

## Phase 6 — Fitur Manajemen Buku [SELESAI]

### Tambah Buku
- [x] Form tambah buku (judul*, penulis, deskripsi*)
- [x] Validasi judul wajib diisi
- [x] Validasi deskripsi tidak boleh kosong
- [x] `escapeHtml()` diterapkan pada semua input pengguna
- [x] Buku baru langsung tampil di grid setelah disimpan
- [x] Form direset otomatis setelah berhasil

### Hapus Buku
- [x] Tombol Hapus pada setiap kartu buku
- [x] Konfirmasi penghapusan via klik tombol
- [x] Grid diperbarui langsung setelah buku dihapus

### Upload & Preview Cover
- [x] Input file gambar pada form tambah buku
- [x] Preview gambar tampil sebelum buku disimpan
- [x] Gambar disimpan sebagai base64 di `localStorage`
- [x] Jika tidak ada gambar, otomatis pakai `placeholder.svg`

### Penyimpanan localStorage
- [x] Data buku dimuat dari `books.json` pada kunjungan pertama
- [x] Semua perubahan (tambah, hapus, cover) disimpan ke `localStorage`
- [x] Data tetap ada setelah refresh halaman
