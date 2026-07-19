# hooks.md — Titik Sinkronisasi Antar Agent

## Hook 1 — Sebelum Mulai Phase
- Development Agent wajib mengumumkan phase yang akan dikerjakan.
- Validation Agent mengkonfirmasi siap memvalidasi.

## Hook 2 — Setelah Setiap Step
- Development Agent: "Step X selesai."
- Validation Agent: memeriksa output dan memberikan PASS atau FAIL.
- Jika FAIL: Development Agent perbaiki, lalu Validation Agent re-check.

## Hook 3 — Setelah Setiap Phase
- Integration test wajib dijalankan sebelum lanjut ke phase berikutnya.
- Validation Agent memberikan laporan singkat hasil integration test.

## Hook 4 — Sebelum Phase 1
- Wajib menunggu persetujuan eksplisit dari pengguna.
- Tidak ada kode yang dibuat sebelum ada kata "setuju" atau "lanjut".
