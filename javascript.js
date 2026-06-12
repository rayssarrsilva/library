// click the plus button design logic
const plusButton = document.getElementById("plus");
const addBook = document.getElementById("add-book");

plusButton.addEventListener("click", () => {
    addBook.classList.toggle("appear");
})

// read or not icon 
const read = document.getElementById("read-or-not");
read.addEventListener("click", () => {
    read.classList.toggle("read");
})

// logic of: saving the books and creating the books
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    const title = document.getElementById("Title");
    const author = document.getElementById("Author");
    const pages = document.getElementById("Pages");

    const readOrNot = read.classList.contains("read");
    const newBook = new Book(title.value, author.value, pages.value, readOrNot);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    addBookToLibrary();
    addBook.classList.remove("appear");
})

function DeleteBook(){

}

// Hover over the h3: My books, Design e animaton Logic & creation of shelf.
const shelfTitle = document.getElementById("shelf-title");
const shelfQuestion = document.getElementById("shelf-question");
const inputAmount = document.getElementById("booksAmount");
const shelf = document.getElementById("shelfs");

shelfTitle.addEventListener("click", () => {
    shelfQuestion.classList.toggle("ativo");
})

inputAmount.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputAmount.value <= 12) {
        const value = inputAmount.value.trim(); // book quantity
        shelfQuestion.classList.toggle("ativo");
        shelf.style.display = "flex";

        inputAmount.value = "";

    } else if (inputAmount.value > 12) {
        alert("Please, Digit a value less than 12")
    }
})

