export default function Validate() {
    const books = document.getElementById("booksAmount");
    const title = document.getElementById("Title");
    const author = document.getElementById("Author");
    const pages = document.getElementById("Pages");

    books.required = true;
    title.required = true;
    author.required = true;
    pages.required = true;

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