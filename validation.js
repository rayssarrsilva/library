export default function Validate() {
    const books = document.getElementById("booksAmount");

    books.addEventListener("input", () => {
        const value = books.value.trim();

        if (value === "") {
            books.setCustomValidity("Enter the number of books.");
        } else if (value < 1 || value > 16){
            books.setCustomValidity("Choose a value between 1 and 16.");
        } else if (!/^\d+$/.test(value)) {
            books.setCustomValidity("Numbers only.");
        }

        books.reportValidity();
    });

    const title = document.getElementById("Title.");

    title.addEventListener("input", () => {
        const value = title.value.trim();

        if (value === ""){
            title.setCustomValidity("Enter the book title.");
        } else if (value.length < 2) {
            title.setCustomValidity("Title must containt at least 2 characters.");
        } else {
            title.setCustomValidity("");
        }

        title.reportValidity();
    });

    const author = document.querySelector("#Author");
    
    author.addEventListener("input", () => {
        const value = author.value.trim();

        if (value === "") {
            author.setCustomValidity("Author is required.");
        } else if (value.length < 2) {
            author.setCustomValidity("Author name is too short.");
        } else {
            author.setCustomValidity("");
        }

        author.reportValidity();
    });

    
    const pages = document.querySelector("#Pages");
    pages.addEventListener("input", () => {
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
    });

}