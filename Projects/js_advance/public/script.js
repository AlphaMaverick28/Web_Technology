// ==========================================
// DOM Element References
// ==========================================
const bookNameInput = document.getElementById("bookNameInput");
const errorMsg = document.getElementById("errorMsg");
const bookList = document.getElementById("bookList");
const emptyState = document.getElementById("emptyState");
const totalBooks = document.getElementById("totalBooks");
const issuedBooks = document.getElementById("issuedBooks");
const availableBooks = document.getElementById("availableBooks");

// ==========================================
// Fetch and Display All Books
// ==========================================
async function fetchBooks() {
  try {
    const response = await fetch("/books");
    const data = await response.json();
    const books = data.books;

    // Update stats
    totalBooks.textContent = books.length;
    issuedBooks.textContent = books.filter((b) => b.issued).length;
    availableBooks.textContent = books.filter((b) => !b.issued).length;

    // Show empty state if no books
    if (books.length === 0) {
      bookList.innerHTML = "";
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    // Render each book as a card
    bookList.innerHTML = books
      .map(
        (book) => `
      <div class="book-card">
        <div class="book-info">
          <div class="book-name">${escapeHtml(book.name)}</div>
          <div class="book-id">ID: ${book.id}</div>
        </div>
        <span class="status-badge ${book.issued ? "issued" : "available"}">
          ${book.issued ? "Issued" : "Available"}
        </span>
        <div class="book-actions">
          <button class="btn-toggle" onclick="toggleIssued(${book.id})">
            ${book.issued ? "Return" : "Issue"}
          </button>
          <button class="btn-delete" onclick="deleteBook(${book.id})">
            Delete
          </button>
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

// ==========================================
// Add a New Book
// ==========================================
async function addBook() {
  const name = bookNameInput.value.trim();

  // Client-side validation
  if (!name) {
    showError("Please enter a book name");
    return;
  }

  try {
    const response = await fetch("/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Show server-side error message
      showError(data.message);
      return;
    }

    // Clear input and error, refresh list
    bookNameInput.value = "";
    clearError();
    fetchBooks();
  } catch (error) {
    console.error("Error adding book:", error);
    showError("Failed to add book. Please try again.");
  }
}

// ==========================================
// Toggle Issued Status (Issue / Return)
// ==========================================
async function toggleIssued(id) {
  try {
    const response = await fetch(`/books/${id}`, {
      method: "PUT",
    });

    if (!response.ok) {
      const data = await response.json();
      showError(data.message);
      return;
    }

    // Refresh the book list
    fetchBooks();
  } catch (error) {
    console.error("Error toggling book status:", error);
  }
}

// ==========================================
// Delete a Book
// ==========================================
async function deleteBook(id) {
  try {
    const response = await fetch(`/books/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const data = await response.json();
      showError(data.message);
      return;
    }

    // Refresh the book list
    fetchBooks();
  } catch (error) {
    console.error("Error deleting book:", error);
  }
}

// ==========================================
// Helper Functions
// ==========================================

// Show error message
function showError(message) {
  errorMsg.textContent = message;
}

// Clear error message
function clearError() {
  errorMsg.textContent = "";
}

// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==========================================
// Event Listeners
// ==========================================

// Allow pressing Enter to add a book
bookNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBook();
  }
});

// Clear error when user starts typing
bookNameInput.addEventListener("input", () => {
  clearError();
});

// ==========================================
// Initial Load - Fetch books when page loads
// ==========================================
fetchBooks();
