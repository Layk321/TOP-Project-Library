
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 295, false);
const endersGame = new Book("Ender's Game", 'Orson Scott Card', 'Science Fiction', 324, true);
const courtroom302 = new Book('Courtroom 302', 'Steve Bogira', 'Nonfiction', 416, true);
const sapiens = new Book("Sapiens: A Brief History of Humankind", 'Yuval Noah Harari', 'Nonfiction', 443, false);


const myLibrary = [theHobbit, endersGame, courtroom302, sapiens];

const bookCardContainer = document.querySelector('.book-card-container');

myLibrary.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.className = 'book-card';
    newBook.textContent = book.title;
    bookCardContainer.appendChild(newBook);
});



function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author =  author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + 
    //     (this.read === true ? 'have read' : 'not read yet');
    // }
}

function addBookToLibrary(title, author, genre, pages) {
    new Book(title, author, genre, pages);
    
}

const createBookButton = document.querySelector('.button');
createBookButton.addEventListener('click', addBookToLibrary);



// console.log(theHobbit.info());