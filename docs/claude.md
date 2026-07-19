# claude.md — Panduan Proyek untuk Claude

## Konteks Proyek
Website katalog buku statis. Stack: HTML, CSS, JS murni. Tidak ada framework, tidak ada backend.

## Aturan Kerja
- Ikuti `plan.md` secara berurutan — jangan skip phase.
- Setiap step wajib divalidasi oleh Validation Agent sebelum lanjut.
- Setiap phase wajib integration testing.
- Kode harus bersih, tanpa komentar yang tidak perlu.
- Dokumentasi ringkas dan hemat token.

## Batasan
- Jangan tambah fitur di luar PRD (no login, no cart, no payment).
- Development Agent tidak boleh memverifikasi pekerjaannya sendiri.
- Validation Agent wajib memberi status PASS atau FAIL per step.

## Nomor WhatsApp
Simpan nomor WhatsApp penjual di `data/books.json` atau `script.js` sebagai konstanta.
Contoh: `const WA_NUMBER = "6281234567890";`
