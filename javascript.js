// click the plus button design logic and logic
const plusButton = document.getElementById("plus");
const addBook = document.getElementById("add-book");
let shelfCapacity = 0;

const valdiator = Validate();

plusButton.addEventListener("click", () => {
    // clean the form values
    title.value = "";
    author.value = "";
    pages.value = "";

    read.classList.remove("read");

    addBook.classList.toggle("appear");
});

// read or not icon 
const read = document.getElementById("read-or-not");
read.addEventListener("click", () => {
    read.classList.toggle("read");
});

// logic of: saving the books, creating and sending them to the storage
const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    };
};

const title = document.getElementById("Title");
const author = document.getElementById("Author");
const pages = document.getElementById("Pages");


function addBookToLibrary() {
    const readOrNot = read.classList.contains("read");

    const newBook = new Book(title.value, author.value, pages.value, readOrNot);
    myLibrary.push(newBook);
};

// Execute the create book logic when you click the add button 
const addButton = document.getElementById("add");
const closeButton = document.getElementById("close");

const slots = document.querySelectorAll("#shelfs div div");
const slotsArray = Array.from(slots);

let currentShelf;

addButton.addEventListener("click", () => {
    if (!validator.isValid()) return;

    if (shelfCapacity === 0) {
        alert("Create a shelf first");
        return;
    }

    if (currentShelf.books >= currentShelf.capacity) {
        alert("Actual shelf is full, Create another shelf before");
        return;
    }

    addBookToLibrary();
    addBook.classList.remove("appear");
    addBookToShelf();
});

closeButton.addEventListener("click", () => {
    addBook.classList.toggle("appear");
});

// Hover over the h3: My books, Design e animaton Logic & creation of shelf.
const shelfTitle = document.getElementById("shelf-title");
const shelfQuestion = document.getElementById("shelf-question");
const inputAmount = document.getElementById("booksAmount");
const shelf = document.getElementById("shelfs");

shelfTitle.addEventListener("click", () => {
    shelfQuestion.classList.toggle("ativo");
});

inputAmount.addEventListener("keydown", (event) => {
    if (!validator.isValid()) return;

    if (event.key === "Enter" && inputAmount.value <= 12) {
        
        const value = inputAmount.value.trim(); // book quantity
        shelfCapacity = value;
        
        createShelf(shelfCapacity);

        shelfQuestion.classList.toggle("ativo");
        shelf.style.display = "flex";

        inputAmount.value = "";

    } else if (inputAmount.value > 12) {
        alert("Please, Digit a value less than 12")
        return;
    } else if(inputAmount.value < 0) {
        alert("Please digit a value that is not 0 or highet than 12");
        return;
    }
});

// add the books in the shelf design

function createShelf(capacity) {
    const row = document.createElement("div");
    
    row.classList.add("shelf-row");

    row.capacity = capacity;
    row.books = 0;

    document.getElementById("shelfs").appendChild(row);

    currentShelf = row;
}

function addBookToShelf() {
    if (!currentShelf) {
        alert("Create a shelf first");
        return;
    }

    if (currentShelf.books >= currentShelf.capacity) {
        alert("This shelf is full");
        return;
    }

    const book = document.createElement("div");
    book.classList.add("book", "visible");

    const actualBook = myLibrary[myLibrary.length - 1];
    book.actualBook = actualBook;

    const showBook = document.getElementById("show-book");

    const colors = ["#1B0F88", "#EFB027", "#EF3127", "#0F8817"];

    book.style.backgroundColor = colors[currentShelf.books % colors.length];

    currentShelf.appendChild(book);

    currentShelf.books++;
    book.shelf = currentShelf;

    book.setAttribute("title", actualBook.read ? "read" : "not read");
    
    book.addEventListener("click", (event) => {
        showBook.innerText = "";

        const bookAuthor = document.createElement("p");
        const bookTitle = document.createElement("h3");
        const bookPages = document.createElement("h6");

        showBook.append(bookAuthor, bookTitle, bookPages);

        showBook.classList.add("visible");
        shelf.classList.add("invisible");
        shelfTitle.classList.add("invisible");

        bookTitle.textContent = book.actualBook.title;
        bookPages.textContent = book.actualBook.pages;
        bookAuthor.textContent = book.actualBook.author;

        bookTitle.addEventListener("click", () => {
            showBook.innerText = "";

            showBook.classList.remove("visible");
            shelf.classList.remove("invisible");
            shelfTitle.classList.remove("invisible");
            return;
        });
    });

    book.addEventListener("contextmenu", (event) => {
        event.preventDefault();

        const remove = confirm(`Delete ${book.actualBook.title} ?`);

        if (!remove) {
            return;
        }

        const index = myLibrary.findIndex(
            find => find.id === book.actualBook.id
        );

        myLibrary.splice(index, 1);
        book.remove();

        book.shelf.books--;
    });
}

function Validate() {
    const books = document.getElementById("booksAmount");
    const title = document.getElementById("Title");
    const author = document.getElementById("Author");
    const pages = document.getElementById("Pages");

    function validateBooks() {
        const value = books.value.trim();

        if (value === "") {
            books.setCustomValidity("Enter the number of books.");
        } else if (!/^\d+$/.test(value)) {
            books.setCustomValidity("Numbers only.");
        } else if (+value < 1 || +value > 16) {
            books.setCustomValidity("Choose a value between 1 and 16.");
        } else {
            books.setCustomValidity("");
        }

        books.reportValidity();
    }

    function validateTitle() {
        const value = title.value.trim();

        if (value === "") {
            title.setCustomValidity("Enter the book title.");
        } else if (value.length < 2) {
            title.setCustomValidity("Title must contain at least 2 characters.");
        } else {
            title.setCustomValidity("");
        }

        title.reportValidity();
    }

    function validateAuthor() {
        const value = author.value.trim();

        if (value === "") {
            author.setCustomValidity("Enter the author name.");
        } else if (value.length < 2) {
            author.setCustomValidity("Author name is too short.");
        } else {
            author.setCustomValidity("");
        }

        author.reportValidity();
    }

    function validatePages() {
        const value = pages.value.trim();

        if (value === "") {
            pages.setCustomValidity("Enter the number of pages.");
        } else if (!/^\d+$/.test(value)) {
            pages.setCustomValidity("Numbers only.");
        } else if (+value < 1) {
            pages.setCustomValidity("Pages must be greater than 0.");
        } else if (+value > 9999) {
            pages.setCustomValidity("Maximum is 9999 pages.");
        } else {
            pages.setCustomValidity("");
        }

        pages.reportValidity();
    }

    books.addEventListener("input", validateBooks);
    books.addEventListener("blur", validateBooks);

    title.addEventListener("input", validateTitle);
    title.addEventListener("blur", validateTitle);

    author.addEventListener("input", validateAuthor);
    author.addEventListener("blur", validateAuthor);

    pages.addEventListener("input", validatePages);
    pages.addEventListener("blur", validatePages);

    return {
        isValid() {
            validateBooks();
            validateTitle();
            validateAuthor();
            validatePages();

            return (
                books.checkValidity() &&
                title.checkValidity() &&
                author.checkValidity() &&
                pages.checkValidity()
            );
        }
    };
}