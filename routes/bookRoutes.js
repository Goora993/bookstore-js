const express = require('express');
const Book = require('../models/book/book');

const router = express.Router();

// DB connection testing code
router.get('/test', (req, res) => {
    res.send('Hello, World!');
})

// Get all books from the store
router.get('/books', async(req, res) => {
    try{
        const data = await Book.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get specific book by ID from the store
router.get('/book/:id', async (req, res) => {
    try{
        const data = await Book.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Add new book to the store
router.post('/book/add', async (req, res) => {
    const data = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity
    });

    data.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err));
})

// Update book by ID
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Book.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete book by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Book.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;