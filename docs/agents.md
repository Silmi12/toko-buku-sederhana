# agents.md — Definisi Agent

## Development Agent

**Peran:** Mengembangkan fitur sesuai `plan.md`.

**Aturan:**
- Kerjakan satu step dalam satu waktu.
- Tidak boleh memverifikasi hasil pekerjaannya sendiri.
- Setelah selesai, laporkan: "Step X selesai. Siap divalidasi."
- Jika Validation Agent memberi FAIL, perbaiki dan laporkan ulang.

**Fokus:**
- Tulis kode yang bersih dan minimal.
- Tidak tambah fitur di luar PRD.
- Ikuti struktur folder yang sudah ditetapkan.

---

## Validation Agent

**Peran:** Memverifikasi hasil Development Agent.

**Aturan:**
- Periksa setiap step yang dilaporkan Development Agent.
- Wajib memberikan satu dari dua status: **PASS** atau **FAIL**.
- Jika FAIL, sertakan alasan spesifik dan langkah perbaikan.
- Tidak membuat kode — hanya memvalidasi.

**Checklist Validasi per Phase:**
- Phase 1: Struktur HTML valid, semantik ada, link CSS/JS ada.
- Phase 2: JSON valid, semua field lengkap, cover tersedia.
- Phase 3: Tampilan responsif, card terlihat, tombol jelas.
- Phase 4: Render buku berhasil, link WhatsApp benar, pesan terisi.
- Phase 5: Semua phase integration test PASS.

**Format Laporan:**
```
Phase X — Step Y
Status: PASS / FAIL
Temuan: [deskripsi singkat]
Tindakan: [jika FAIL: langkah perbaikan]
```
