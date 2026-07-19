# review.md — Template Review per Phase

## Format Review

```
## Phase X — [Nama Phase]

### Checklist
- [ ] Item 1
- [ ] Item 2

### Temuan
- ...

### Status: PASS / FAIL

### Catatan
- ...
```

---

## Review Log

### Phase 0 — Setup & Dokumentasi
- [x] PRD dibuat
- [x] Folder struktur dibuat
- [x] Semua docs dibuat
- [x] Agents didefinisikan
- Status: PASS

---

### Phase 1 — Struktur HTML Dasar

**Checklist:**
- [x] `index.html` — DOCTYPE, lang="id", charset, viewport, og meta ✓
- [x] Struktur semantik: `<header>`, `<main>`, `<section>`, `<footer>` ✓
- [x] `<link rel="stylesheet" href="style.css">` ada di `<head>` ✓
- [x] `<script src="script.js">` ada sebelum `</body>` ✓
- [x] `id="book-grid"` sebagai hook JS ✓
- [x] CSS responsif: 1 kolom (mobile) → 2 kolom (≥600px) → 3 kolom (≥900px) ✓
- [x] Tombol `.btn-whatsapp` dengan ikon WhatsApp SVG ✓
- [x] Tidak ada harga, cart, checkout, login ✓
- [x] `WA_NUMBER` dan `WA_MESSAGE` terdefinisi di `script.js` ✓
- [x] URL WhatsApp menggunakan `encodeURIComponent` ✓
- [x] Empty state dan error state tersedia ✓

**Temuan:**
- Tidak ada fitur terlarang (harga/cart/checkout/login).
- HTML semantik lengkap dan valid.
- Layout responsif 3 breakpoint sudah benar.
- `books.json` belum ada (akan dibuat Phase 2 — bukan scope Phase 1).

**Status: PASS**
