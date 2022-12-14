const express = require('express');
const Book = require('../models/book/book');

const router = express.Router();

// DB connection testing code
router.get('/add-book', (req, res) => {
    const book = new Book({
        title: 'New Book',
        author: 'New Author',
        ISBN: 'ISBN',
        price: 10.99,
        quantity: 120
    });
    book.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err));
})

// Book REST Api implementation here

module.exports = router;