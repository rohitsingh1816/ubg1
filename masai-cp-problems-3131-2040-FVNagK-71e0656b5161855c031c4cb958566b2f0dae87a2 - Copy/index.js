// Do not forgot to export server at the end
// module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
// Routes
// 1. Add a new book
app.post('/api/addBook', (req, res) => {
  // Validation logic to ensure all required fields exist
  const requiredFields = ['title', 'author', 'genre', 'description', 'price'];
  const missingFields = requiredFields.filter(field => !req.body[field]);
  if (missingFields.length > 0) {
    return res.status(400).json({ success: false, message: `Missing required fields: ${missingFields.join(', ')}` });
  }
  // If validation successful, proceed to add book to database
  // Code for adding book to database
  // Send success response
  res.status(201).json({ success: true, message: 'Book added successfully.', book: req.body });
});
// 2. Retrieve all books
app.get('/api/getBooks', (req, res) => {
  // Code for retrieving all books from database
  // Sorting and filtering logic based on query parameters
  // Send response with array of books
  res.status(200).json({ /* Array of books */ });
});
// 3. Delete a book
app.delete('/api/deleteBook/:id', (req, res) => {
  const bookId = req.params.id;
  // Code for deleting book from database
  // Send success response
  res.status(200).json({ success: true, message: 'Book deleted successfully.', book: /* updated book object */ });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});