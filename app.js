let totalBill = 0; // Track total bill
let cartItems = []; // Track items in the cart

// Sample burgers array
const sampleBurgers = [
    { name: "Classic Beef Burger", no: 1, price: 5.99 },
    { name: "Cheese Burger", no: 2, price: 6.49 },
    { name: "Double Beef Burger", no: 3, price: 7.99 },
    { name: "Chicken Burger", no: 4, price: 5.49 },
    { name: "Spicy Chicken Burger", no: 5, price: 6.29 },
    { name: "Vegan Burger", no: 6, price: 6.99 },
    { name: "Fish Fillet Burger", no: 7, price: 5.79 },
    { name: "BBQ Bacon Burger", no: 8, price: 8.49 },
    { name: "Mushroom Swiss Burger", no: 9, price: 7.49 },
    { name: "Egg and Sausage Burger", no: 10, price: 4.99 }
];

// Load sample burgers when the page loads
window.onload = function() {
    loadSampleBurgers();
};

// Function to load sample burgers
function loadSampleBurgers() {
    sampleBurgers.forEach(burger => {
        createBurgerCard(burger.name, burger.no, burger.price);
    });
}

// Add new burger to menu when the "Add Burger" button is clicked
document.getElementById('addBurgerButton').addEventListener('click', function() {
    // Get values from the input fields
    let burgerName = document.getElementById('burgerName').value;
    let burgerNo = document.getElementById('burgerNo').value;
    let burgerPrice = document.getElementById('burgerPrice').value;

    // Ensure all fields are filled
    if (burgerName === "" || burgerNo === "" || burgerPrice === "") {
        alert("Please fill all the fields");
        return;
    }

    // Create the burger card for the new burger
    createBurgerCard(burgerName, burgerNo, burgerPrice);

    // Clear input fields after burger is added
    document.getElementById('burgerName').value = "";
    document.getElementById('burgerNo').value = "";
    document.getElementById('burgerPrice').value = "";
});

// Function to create a burger card
function createBurgerCard(burgerName, burgerNo, burgerPrice) {
    // Create a new card for the burger
    let card = document.createElement('div');
    card.classList.add('col-md-4', 'burger-card');
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Burger No: ${burgerNo}</h5>
                <p class="card-text">Name: ${burgerName}</p>
                <p class="card-text">Price: $${burgerPrice}</p>
                <button class="btn btn-success addToCartBtn">Add to Cart</button>
            </div>
        </div>
    `;

    // Add the new burger card to the menu
    document.getElementById('burgerMenu').appendChild(card);

    // Add event listener to the "Add to Cart" button
    card.querySelector('.addToCartBtn').addEventListener('click', function() {
        addToCart(burgerName, burgerPrice);
    });
}

// Function to add an item to the cart
function addToCart(name, price) {
    // Add to cart array
    cartItems.push({ name, price });

    // Update total bill
    totalBill += parseFloat(price);

    // Update the cart display
    updateCartDisplay();
}

// Function to update cart list and total bill
function updateCartDisplay() {
    // Get cart list element
    let cartList = document.getElementById('cartList');
    cartList.innerHTML = ""; // Clear cart

    // Add each cart item to the list
    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'cart-item');
        li.innerHTML = `<span>${item.name}</span><span class="badge badge-primary badge-pill">$${item.price}</span>`;
        cartList.appendChild(li);
    });

    // Update total bill
    document.getElementById('totalBill').textContent = totalBill.toFixed(2);
}

// Event listener for "Generate Bill" button
document.getElementById('generateBillButton').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Your total bill is $${totalBill.toFixed(2)}.`);
    }
});

// Event listener for "Clear Cart" button
document.getElementById('clearCartButton').addEventListener('click', function() {
    // Clear the cart items and reset the total bill
    cartItems = [];
    totalBill = 0;

    // Update the cart display
    updateCartDisplay();
});
