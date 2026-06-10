const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {}

// Hover over the h3: My books, Logic.
const shelfTitle = document.getElementById("shelf-title");
const shelfQuestion = document.getElementById("shelf-question");
const inputAmount = document.getElementById("booksAmount");

shelfTitle.addEventListener("click", () => {
    shelfQuestion.classList.toggle("ativo");
})

inputAmount.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const value = inputAmount.value.trim();
    }
    shelfQuestion.classList.toggle("ativo");
    inputAmount.value = "";
})