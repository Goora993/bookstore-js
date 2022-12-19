const Book = require('../models/book/book');
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();

const bookCreationSchema = {
    id: '/book',
    type: 'object',
    properties: {title: {type: 'string'}, author: {type: 'string'}, price: {type: 'double'}, quantity: {type: 'integer'}},
    required: ['title', 'author', 'price', 'quantity']
};

const getAllBooks = async (req, res, next) => {
    Book.find()
        .then(result => res.json(result))
        .catch(next);
}

const getBookById = async (req, res, next) => {
    Book.findById(req.params.id)
        .then(result => {
            if (result == null) {
                res.status(404).json({message: "Book not found"})
            } else {
                res.json(result);
            }
        })
        .catch(next);
}

const addBook = async (req, res) => {
    try {
        validator.validate(req.body, bookCreationSchema, {throwError: true});
    } catch (error) {
        res.status(400).json({message: 'Invalid body format: ' + error.message});
        return;
    }

    const data = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity
    });

    data.save()
        .then((result) => {
            res.status(201);
            res.send(result);
        })
        .catch((err) => console.log(err));
}

const updateBookById = async (req, res, next) => {
    const id = req.params.id;
    const updatedData = req.body;
    const options = {new: true};

    Book.findByIdAndUpdate(id, updatedData, options)
        .then(result => {
            if (result != null) {
                res.json({message: `Book: ${result} has been updated.`});
            } else {
                res.status(404).json({message: `Book with ${id} was not found`});
            }
        })
        .catch(next)
}

const deleteBookById = async (req, res, next) => {
    const id = req.params.id

    Book.findByIdAndDelete(id)
        .then(result => {
            if (result != null) {
                res.json({message: `Book: ${result} has been deleted.`});
            } else {
                res.status(404).json({message: `Book with ${id} was not found`});
            }
        })
        .catch(next)
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBookById,
    deleteBookById
}