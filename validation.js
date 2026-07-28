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
    });

    books.reportValidity();
}