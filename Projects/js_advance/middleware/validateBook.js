// Validate Book Middleware
// Checks if the book name is provided and is not empty in POST requests

const validateBook = (req, res, next) => {
  const { name } = req.body;

  // Check if name field exists and is not an empty string
  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Book name is required and cannot be empty",
    });
  }

  // Pass control to the next middleware or route handler
  next();
};

module.exports = validateBook;
