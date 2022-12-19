const express = require('express');
const bookController = require('../controller/bookController')

const router = express.Router();

// Get all books from the store
router.get('/books', bookController.getAllBooks)

// Get specific book by ID from the store
router.get('/book/:id', bookController.getBookById)

// Add new book to the store
router.post('/book/add', bookController.addBook)

// Update book by ID
router.patch('/update/:id', bookController.updateBookById)

// Delete book by ID
router.delete('/delete/:id', bookController.deleteBookById)

module.exports = router;