
const myLibrary = [];

const bookCardContainer = document.querySelector('.book-card-container');

class Book {
    static bookIDCounter = 1;
    constructor(title, author, pages, genre) {
        this.bookID = Book.bookIDCounter++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.read = false;
        myLibrary.push(this);
    }
};

function addBookToLibrary(title, author, pages, genre) {
    new Book(title, author, pages, genre);
    createCard();
};

function createCard() {
    const book = myLibrary.at(-1);
    const newBookCard = document.createElement('div');
    newBookCard.className = 'book-card';
    newBookCard.setAttribute('data-book-id', book.bookID);
    removeBookButton(newBookCard);
    toggleReadStatus(newBookCard);
    bookCardContainer.appendChild(newBookCard);

    const bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.textContent = `Title: ${book.title}`;
    newBookCard.append(bookTitle);
    
    if (book.author) {
        const bookAuthor = document.createElement('p');
        bookAuthor.className = 'book-author';
        bookAuthor.textContent = `Author: ${book.author}`;
        bookAuthor ? newBookCard.append(bookAuthor) : null;
    }

    if (book.pages) {
        const bookPages = document.createElement('p');
        bookPages.className = 'book-pages';
        bookPages.textContent = `Number of Pages: ${book.pages}`;
        bookPages ? newBookCard.append(bookPages) : null;
    }

    if (book.genre) {
        const bookGenre = document.createElement('p');
        bookGenre.className = 'book-genre';
        bookGenre.textContent = `Genre: ${book.genre}`;
        bookGenre ? newBookCard.append(bookGenre) : null;
    }
};

function removeBookButton(newBookCard) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    newBookCard.append(deleteButton);
    deleteButton.addEventListener('click', function() {
        const bookID = parseInt(newBookCard.getAttribute('data-book-id'));
        const bookIndex = myLibrary.findIndex((element) => element.bookID === bookID);
        const bookToRemove = myLibrary.find((element) => element.bookID === bookID);
        if (bookID === bookToRemove.bookID) {
            myLibrary.splice(bookIndex, 1);
        }
        this.parentNode.remove();
    })
}

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

function toggleReadStatus(newBookCard) {
    const toggleRead = document.createElement('button');
    toggleRead.textContent = 'X';
    toggleRead.className = 'read-status';
    newBookCard.append(toggleRead);
    toggleRead.addEventListener('click', function() {
        const bookID = parseInt(newBookCard.getAttribute('data-book-id'));
        const bookToChangeReadStatus = myLibrary.find((element) => element.bookID === bookID);
        if (bookToChangeReadStatus.read === true) {
            bookToChangeReadStatus.read = false;
        } else bookToChangeReadStatus.read = true;
    })
}