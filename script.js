
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




function Book(title, author, genre, pages) {
    this.title = title;
    this.author =  author;
    this.genre = genre;
    this.pages = pages;
    //this.read = read; - removed for now, want to incorporate as a check on the card itself (remember to add back into argument list if reinstated)
    // this.info = function() {
    //     return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + 
    //     (this.read === true ? 'have read' : 'not read yet');
    // }
}

function addBookToLibrary(title, author, pages, genre) {
    const newBook = new Book(title, author, pages, genre);
    myLibrary.push(newBook);
    console.log(myLibrary);
    
    //call separate function to create new element from last myLibrary entry
}

// const addBookForm = document.querySelector('button');
// addBookForm.addEventListener('click', function(event) {
//     addBookToLibrary;
//     event.preventDefault();
// });

const addBookForm = document.querySelector('#new-book');
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = event.currentTarget.title.value;
    const author = event.currentTarget.author.value;
    const pages = event.currentTarget.pages.value;
    const genre = event.currentTarget.genre.value;
    addBookToLibrary(title, author, pages, genre);
    addBookForm.reset();
})


// console.log(theHobbit.info());