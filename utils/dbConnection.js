require('dotenv').config();
const mongoose = require('mongoose');

function establishConnection() {
    mongoose.set('strictQuery', true);
    mongoose.connect(prepareDbUri(), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() =>  console.log('Connected to db'))
        .catch((err) => console.log(err));
}

function prepareDbUri() {
    return `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_URL}`;
}

module.exports = { establishConnection }



