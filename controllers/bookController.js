const Book = require('../models/book/book');

const getAllBooks = (req, res) => {
    Book.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err));
}

const getBook = (req, res) => {
    Book.findById(req.params.id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err));
}

const addBook = (req, res) => {
    console.log("Request body: ")
    console.log(req.body);
    const book = new Book(req.body);

    book.save()
        .then(() => {
            res.send(`Book with id: ${book.id} has been created with quantity of ${book.get('quantity')}`)
        })
        .catch((err) => console.log(err));
}

//In progress
const editBook = (req, res) => {
    Book.findByIdAndUpdate()
        .then()

}
//In progress
const deleteBook = (req, res) => {
    Book.deleteOne(req.params.id)
        .then(() => {
            res.send(`Book with id: ${req.params.id} has been removed.`)
        })
        .catch((err) => console.log(err));
}


module.exports = {
    getAllBooks,
    getBook,
    addBook,
    editBook,
    deleteBook
}