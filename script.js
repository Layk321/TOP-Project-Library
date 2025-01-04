
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295,'Fantasy', false);
const endersGame = new Book("Ender's Game", 'Orson Scott Card', 324,'Science Fiction', true);
const courtroom302 = new Book('Courtroom 302', 'Steve Bogira', 416, 'Nonfiction', true);
const sapiens = new Book("Sapiens: A Brief History of Humankind", 'Yuval Noah Harari', 443,'Nonfiction', false);


const myLibrary = [theHobbit, endersGame, courtroom302, sapiens];

const bookCardContainer = document.querySelector('.book-card-container');

myLibrary.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.className = 'book-card';
    newBook.textContent = book.title;
    bookCardContainer.appendChild(newBook);
});


function Book(title, author, pages, genre) {
    this.title = title;
    this.author =  author;
    this.pages = pages;
    this.genre = genre;
    //this.read = read; - removed for now, want to incorporate as a check on the card itself (remember to add back into argument list if reinstated)
};

function addBookToLibrary(title, author, pages, genre) {
    const newBook = new Book(title, author, pages, genre);
    myLibrary.push(newBook);
    console.log(myLibrary); //remember to remove
    createCard();
};

function createCard() {
    const book = myLibrary.at(-1);
    const newBook = document.createElement('div');
    newBook.className = 'book-card';
    bookCardContainer.appendChild(newBook);

    const bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.textContent = `Title: ${book.title}`;
    newBook.append(bookTitle);
    
    if (book.author) {
        const bookAuthor = document.createElement('p');
        bookAuthor.className = 'book-author'; //I could probably remove creating the class names and:
        bookAuthor.textContent = `Author: ${book.author}`; //use CSS to select p's beggining with what i need for styling, in this case beginning with Author
        bookAuthor ? newBook.append(bookAuthor) : null;
    }

    if (book.pages) {
        const bookPages = document.createElement('p');
        bookPages.className = 'book-pages';
        bookPages.textContent = `Number of Pages: ${book.pages}`;
        bookPages ? newBook.append(bookPages) : null;
    }

    if (book.genre) {
        const bookGenre = document.createElement('p');
        bookGenre.className = 'book-genre';
        bookGenre.textContent = `Genre: ${book.genre}`;
        bookGenre ? newBook.append(bookGenre) : null;
    }
};

const addBookForm = document.querySelector('#new-book');
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = event.currentTarget.title.value;
    const author = event.currentTarget.author.value;
    const pages = event.currentTarget.pages.value;
    const genre = event.currentTarget.genre.value;
    addBookToLibrary(title, author, pages, genre);
    addBookForm.reset();
});