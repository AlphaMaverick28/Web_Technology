const express = require("express");
const app = express();
const PORT = 3000;

// ==========================================
// Middleware Setup
// ==========================================

// Parse incoming JSON request bodies
app.use(express.json());

// Serve static frontend files from "public" folder
app.use(express.static("public"));

// Logger middleware - logs every request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// ==========================================
// In-Memory Data Store
// ==========================================
let books = [
  { id: 1, name: "The Great Gatsby", issued: false },
  { id: 2, name: "To Kill a Mockingbird", issued: true },
  { id: 3, name: "1984", issued: false },
];

let nextId = 4; // Tracks the next unique ID

// ==========================================
// API Routes
// ==========================================

// GET /books - Return all books
app.get("/books", (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    count: books.length,
    books: books,
  });
});

// POST /books - Add a new book
app.post("/books", (req, res) => {
  const { name } = req.body;

  // Validate: book name must not be empty
  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Book name is required and cannot be empty",
    });
  }

  // Create new book object
  const newBook = {
    id: nextId++,
    name: name.trim(),
    issued: false,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook,
  });
});

// PUT /books/:id - Toggle issued status
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  // Handle book not found
  if (!book) {
    return res.status(404).json({
      message: `Book with ID ${bookId} not found`,
    });
  }

  // Toggle issued status
  book.issued = !book.issued;
  const status = book.issued ? "issued" : "returned";

  res.json({
    message: `Book ${status} successfully`,
    book: book,
  });
});

// DELETE /books/:id - Delete a book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  // Handle book not found
  if (bookIndex === -1) {
    return res.status(404).json({
      message: `Book with ID ${bookId} not found`,
    });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.json({
    message: "Book deleted successfully",
    book: deletedBook,
  });
});

// ==========================================
// Start the Server
// ==========================================
app.listen(PORT, () => {
  console.log(`Library Book Manager is running at http://localhost:${PORT}`);
});
