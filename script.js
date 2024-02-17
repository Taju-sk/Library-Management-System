let totalBooks = [];
function addBook() {
  let titleValue = document.getElementById("title").value;
  let authorValue = document.getElementById("author").value;
  let pagesValue = parseInt(document.getElementById("pages").value);
  let genreValue = document.getElementById("genre").value;
  if (titleValue && authorValue && pagesValue && genreValue) {
    let book = {
      title: titleValue,
      author: authorValue,
      pages: pagesValue,
      genre: genreValue,
    };
    totalBooks.push(book);
    showBook();
  } else {
    alert("Please fill all the fields");
  }
}

function showBook(books = totalBooks) {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
    `;
    bookList.appendChild(bookDiv);
  });
}

function clearBook() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("genre").value = "";
}

function searchBook() {
  let searchTitle = document.getElementById("searchTitle").value.toLowerCase();
  let searchResult = totalBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTitle)
  );
  showBook(searchResult);
}
