let cart = [];
const cartCount = document.getElementById('cart-count');
const cartDetails = document.getElementById('cart-details');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const bookList = document.getElementById('book-list');
const bookPopup = document.getElementById('book-popup');
const closePopup = document.getElementById('close-popup');
const bookTitle = document.getElementById('book-title');
const bookImage = document.getElementById('book-image');
const bookDescription = document.getElementById('book-description');
const bookPrice = document.getElementById('book-price');

const books = [
    { name: 'Book 1', price: 10, category: 'fiction', description: 'This is a fictional book.', image: 'book1.jpg' },
    { name: 'Book 2', price: 15, category: 'science', description: 'This is a science book.', image: 'book2.jpg' },
    { name: 'Book 3', price: 20, category: 'history', description: 'This is a history book.', image: 'book3.jpg' },
    // Add more books here
];

// Function to render books
function renderBooks(filteredBooks) {
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p class="price">$${book.price}</p>
            <button class="add-to-cart" data-name="${book.name}" data-price="${book.price}">Add to Cart</button>
        `;
        bookItem.addEventListener('click', () => showBookDetails(book));
        bookList.appendChild(bookItem);
    });
}

// Function to filter books based on search and category
function filterBooks() {
    const searchText = searchBar.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    renderBooks(filteredBooks);
}

// Show book details in popup
function showBookDetails(book) {
    bookTitle.textContent = book.name;
    bookImage.src = book.image;
    bookDescription.textContent = book.description;
    bookPrice.textContent = book.price;
    bookPopup.style.display = 'flex';
}

// Close book details popup
closePopup.addEventListener('click', () => {
    bookPopup.style.display = 'none';
});

// Add book to cart
function addToCart(book) {
    cart.push(book);
    updateCart();
}

// Update cart count and details
function updateCart() {
    const cartLength = cart.length;
    cartCount.textContent = cartLength;

    if (cartLength > 0) {
        cartDetails.classList.remove('hidden');
    } else {
        cartDetails.classList.add('hidden');
    }

    // Update cart items
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button class="remove-item" data-index="${index}">Remove</button>`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;

    // Add event listener to remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            cart.splice(index, 1);
            updateCart();
        });
    });
}

// Handle add to cart button click
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const book = {
            name: this.getAttribute('data-name'),
            price: parseFloat(this.getAttribute('data-price'))
        };
        addToCart(book);
    });
});

// Checkout button
document.getElementById('checkout').addEventListener('click', function () {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
});

// Event listeners for search bar and category filter
searchBar.addEventListener('input', filterBooks);
categoryFilter.addEventListener('change', filterBooks);

// Initial render of books
renderBooks(books);
