// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add book to List
UI.prototype.addBookToList = function (book) {
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

  list.appendChild(row);
  console.log(row);
};

// Remove book from list
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// Show alert
UI.prototype.showAlert = function (message, className, time) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);
  // Timeout after 3s
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, time);
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event listeners for add book
document.querySelector('#book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error', 2500);
  } else {
    // Add book to list
    ui.addBookToList(book);

    //Show alert
    ui.showAlert('Book added', 'success', 2500);

    // Clear fields
    ui.clearFields();
  }
});

// Event listener for delete
document.querySelector('#book-list').addEventListener('click', (event) => {
  // Instantiate UI
  const ui = new UI();

  ui.deleteBook(event.target);

  // Show alert
  ui.showAlert('You have deleted a book', 'success', 1000);

  event.preventDefault();
});
