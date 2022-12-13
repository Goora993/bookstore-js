const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Book = require('./models/book/book');

//express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://admin:admin@cluster0.e2rqpmv.mongodb.net/bookstore?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  console.log('Connected to db'))
    .catch((err) => console.log(err));

//listen for requests
app.listen(3000);

//middleware & static
app.use(express.static('public'));
app.use(morgan('dev'));

// DB connection testing code
app.get('/add-book', (req, res) => {
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

