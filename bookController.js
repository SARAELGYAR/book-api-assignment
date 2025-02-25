let books = [
    { id: 1, title: "thr giver", author: "mohamed ahmed", year: 1980 },
    { id: 2, title: "the old and the sea", author: "Dante Alighireri", year: 1700 },
    { id: 3, title: "AL AML", author: "Mohamed Salah", year: 1820 }
  ];
  
  // Get all books
  exports.getAllBooks = (req, res) => {
    res.json(books);
  };
  
  // Get a specific book by ID
  exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  };
  
  // Add a new book
  exports.addBook = (req, res) => {
    const book = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year
    };
    books.push(book);
    res.status(201).json(book);
  };
  
  // Update a book by ID
  exports.updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
  
    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
  
    res.json(book);
  };
  
  // Delete a book by ID
  exports.deleteBook = (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');
  
    books.splice(bookIndex, 1);
    res.status(204).send();
  };