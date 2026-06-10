const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

// Hover over the h3: My books, Logic.
const shelfTitle = document.getElementById("shelf-title");
const shelfQuestion = document.getElementById("shelf-question");

shelfTitle.addEventListener("click", () => {
    shelfQuestion.classList.toggle("ativo");
})

