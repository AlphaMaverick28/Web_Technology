const express = require("express");
const router = express.Router();

// Import validation middleware
const validateBook = require("../middleware/validateBook");

// ==========================================
// In-Memory Data Store (acts as our database)
// ==========================================
let books = [
  { id: 1, name: "The Great Gatsby", issued: false },
  { id: 2, name: "To Kill a Mockingbird", issued: true },
  { id: 3, name: "1984", issued: false },
];

// Variable to track the next unique ID
let nextId = 4;

// ==========================================
// GET /books - Return list of all books
// ==========================================
router.get("/", (req, res) => {
  res.json({
    message: "Books retrieved successfully",
    count: books.length,
    books: books,
  });
});

// ==========================================
// POST /books - Add a new book
// Uses validateBook middleware to check name
// ==========================================
router.post("/", validateBook, (req, res) => {
  const { name } = req.body;

  // Create a new book object with a unique ID
  const newBook = {
    id: nextId++,
    name: name.trim(),
    issued: false, // New books are not issued by default
  };

  // Add the new book to the in-memory array
  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook,
  });
});

// ==========================================
// PUT /books/:id - Toggle issued status
// (Issue a book or return a book)
// ==========================================
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  // Find the book by its ID
  const book = books.find((b) => b.id === bookId);

  // Handle case when book is not found
  if (!book) {
    return res.status(404).json({
      message: `Book with ID ${bookId} not found`,
    });
  }

  // Toggle the issued status
  book.issued = !book.issued;

  const status = book.issued ? "issued" : "returned";

  res.json({
    message: `Book ${status} successfully`,
    book: book,
  });
});

// ==========================================
// DELETE /books/:id - Delete a book
// ==========================================
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  // Find the index of the book to delete
  const bookIndex = books.findIndex((b) => b.id === bookId);

  // Handle case when book is not found
  if (bookIndex === -1) {
    return res.status(404).json({
      message: `Book with ID ${bookId} not found`,
    });
  }

  // Remove the book from the array
  const deletedBook = books.splice(bookIndex, 1)[0];

  res.json({
    message: "Book deleted successfully",
    book: deletedBook,
  });
});

module.exports = router;
