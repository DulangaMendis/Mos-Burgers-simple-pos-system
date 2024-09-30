// JavaScript Cart Functionality
let cart = [];
let totalAmount = 0;

// Function to add item to cart
function addToCart(productName, productPrice) {
    // Add item to the cart array
    cart.push({ name: productName, price: productPrice });
    // Update total price
    totalAmount += productPrice;
    // Refresh the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsList = document.querySelector('.list-unstyled');
    cartItemsList.innerHTML = ''; // Clear current items

    // Add each cart item to the list
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - RS ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Update total in the UI
    document.querySelector('.fs-4').textContent = `RS: ${totalAmount.toFixed(2)}`;
}

// Function to clear the cart
function clearCart() {
    cart = []; // Reset the cart
    totalAmount = 0; // Reset the total amount
    updateCartDisplay(); // Refresh the cart display
}

// Function to generate bill
function generateBill() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }

    let billDetails = "Your Order:\n";
    cart.forEach((item) => {
        billDetails += `${item.name}: RS ${item.price.toFixed(2)}\n`;
    });
    billDetails += `\nTotal: RS ${totalAmount.toFixed(2)}`;

    // Display the bill in an alert
    alert(billDetails);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.btn-primary').forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('.item-name').textContent;
            const productPrice = parseFloat(button.parentElement.querySelector('.card-title').textContent.replace('RS ', ''));
            
            // Add item to cart when clicked
            addToCart(productName, productPrice);
        });
    });

    // Attach event listener to "Clear Cart" button
    document.querySelector('.btn-danger').addEventListener('click', clearCart);

    // Attach event listener to "Generate Bill" button
    document.querySelector('.btn-success').addEventListener('click', generateBill);
});
