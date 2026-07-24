const WA_NUMBER = "6281234567890";
const WA_MESSAGE = "Halo, saya ingin bertanya mengenai buku:";
const STORAGE_KEY = "toko_buku_data";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildWhatsAppURL(bookTitle) {
  const message = `${WA_MESSAGE} ${bookTitle}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getBooksFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function saveBooksToStorage(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.dataset.id = book.id;

  const coverSrc = escapeHtml(book.cover || "assets/images/placeholder.svg");
  const safeTitle = escapeHtml(book.title);
  const safeDesc  = escapeHtml(book.description);
  const safeAuthor = escapeHtml(book.author || "");

  card.innerHTML = `
    <img
      class="book-cover"
      src="${coverSrc}"
      alt="Cover buku ${safeTitle}"
      loading="lazy"
      onerror="this.src='assets/images/placeholder.svg'"
    />
    <div class="book-info">
      <h2 class="book-title">${safeTitle}</h2>
      ${safeAuthor ? `<p class="book-author">${safeAuthor}</p>` : ""}
      <p class="book-description">${safeDesc}</p>
      <div class="book-actions">
        <a
          class="btn-whatsapp"
          href="${buildWhatsAppURL(book.title)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tanya tentang buku ${safeTitle} via WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Tanya Buku Ini
        </a>
        <button
          class="btn-hapus"
          data-id="${book.id}"
          aria-label="Hapus buku ${safeTitle}"
        >Hapus</button>
      </div>
    </div>
  `;

  card.querySelector(".btn-hapus").addEventListener("click", () => deleteBook(book.id));
  return card;
}

function renderBooks(books) {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = "";

  if (!books.length) {
    grid.innerHTML = '<p class="empty-state">Belum ada buku tersedia.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  books.forEach((book) => fragment.appendChild(createBookCard(book)));
  grid.appendChild(fragment);
}

function deleteBook(id) {
  const books = getBooksFromStorage();
  const updated = books.filter((b) => b.id !== id);
  saveBooksToStorage(updated);
  renderBooks(updated);
}

function initCoverPreview() {
  const input = document.getElementById("input-cover");
  const preview = document.getElementById("preview-cover");
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) { preview.classList.add("hidden"); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  });
}

function readCoverAsBase64(file) {
  return new Promise((resolve) => {
    if (!file) { resolve(null); return; }
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById("input-judul");
  const authorInput = document.getElementById("input-penulis");
  const descInput = document.getElementById("input-deskripsi");
  const coverInput = document.getElementById("input-cover");
  const errorEl = document.getElementById("form-error");

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const desc = descInput.value.trim();

  // Validasi
  if (!title) {
    errorEl.textContent = "Judul buku wajib diisi.";
    titleInput.focus();
    return;
  }
  if (!desc) {
    errorEl.textContent = "Deskripsi buku tidak boleh kosong.";
    descInput.focus();
    return;
  }

  errorEl.textContent = "";

  const coverFile = coverInput.files[0] || null;
  readCoverAsBase64(coverFile).then((base64) => {
    const books = getBooksFromStorage() || [];
    const newBook = {
      id: Date.now(),
      title,
      author,
      description: desc,
      cover: base64 || "assets/images/placeholder.svg",
    };

    books.push(newBook);
    saveBooksToStorage(books);
    renderBooks(books);

    event.target.reset();
    document.getElementById("preview-cover").classList.add("hidden");
    titleInput.focus();
  });
}

async function loadBooks() {
  const grid = document.getElementById("book-grid");

  try {
    let books = getBooksFromStorage();

    if (!books) {
      const response = await fetch("data/books.json");
      if (!response.ok) throw new Error("Gagal memuat data buku.");
      books = await response.json();
      saveBooksToStorage(books);
    }

    renderBooks(books);
  } catch (err) {
    grid.innerHTML = '<p class="empty-state">Gagal memuat daftar buku. Coba muat ulang halaman.</p>';
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadBooks();
  initCoverPreview();
  document.getElementById("form-tambah-buku").addEventListener("submit", addBook);
});
