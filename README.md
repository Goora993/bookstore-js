# D&D bookstore

### Introduction
This is a demonstration CRUD project of a backend application designed to manage the bookstore by employees on the one hand, and to manage purchases by customers on the other.

### Tech stack
- JavaScript
- Node.js
- Express framework
- MongoDB

### Running instruction
Open console and make sure you are in the project directory. Then you need to use command ```npm install``` to install all needed dependencies. On the end command ```nodemon app``` to finally run the server.

<br /> In addition, the application is available from the internet. It is deployed on the Render server and its address is https://dd-bookstore.onrender.com

### Requirements definitions
#### Non-functional requirements
- Cloud instance of database
- Only whitelisted IPs have access to database

#### Functional requirements
- Shopkeepers can add new books to the catalog 
  - Completely new book can be created
- Customers can see all the available books 
  - All books can be gathered from DB and returned as a response
- Book details can be changed
  - Each field of the book can be updated
- Book can be removed when it is not available in the catalog anymore

### Potential users
- Customer
- Shopkeepers

### Users benefits
- Fast online shopping 
- Digitalized managing books

### REST Api specification
- Get all books: GET /books
  - Returns a response with all available books in the collection
- Get specific book by ID: GET /book/:id
  - Returns all details of the book
  - In addition to the main attributes (title, author, price, quantity), there are e.g. object ID, creation date, modification date, etc.
- Add new book: POST /book/add 
  - This API requires that all book attributes have values in the create request
  - Attributes:
    - title -> string
    - author -> string
    - price -> double
    - quantity -> integer
  - Payload example:
    ```
    {
       title: "Example Title",
       author: "Very Nice Funny Man",
       price: 99.99,
       quantity: 1
    }
    ```
- Update book by ID: PATCH /update/:id
  - Attributes allowed to update:
    - title -> string
    - author -> string
    - price -> double
    - quantity -> integer
  - It is allowed to update single or multiple attributes
  - Payload example:
    ```
    {
       price: 30.50,
       quantity: 100
    }
    ```
- Delete book by ID: DELETE /delete/:id

### Database specification
#### Brief description
The selected database is the cloud version of MongoDB.
We chose this type of database because non-sql databases are
very easy to design and implement in such an uncomplicated project.

#### Collections
Since the application is only a sample, we only have one Collection - Books.
The structure of a document in a Books Collection is:
- title -> type: string, mandatory: true
- author -> type: string, mandatory: true
- price -> type: number, mandatory: true
- quantity -> type: number, mandatory: true




