document.getElementById('addBurgerButton').addEventListener('click', function() {
    // Get values from the input fields
    let burgerName = document.getElementById('burgerName').value;
    let burgerNo = document.getElementById('burgerNo').value;
    let burgerPrice = document.getElementById('burgerPrice').value;

    // Check if all fields are filled
    if (burgerName === "" || burgerNo === "" || burgerPrice === "") {
        alert("Please fill all the fields");
        return;
    }

    // Create a new list item for the burger
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
        <span>No: ${burgerNo}</span>
        <span>Name: ${burgerName}</span>
        <span class="badge badge-primary badge-pill">$${burgerPrice}</span>
    `;

    // Add the new burger to the burger menu
    document.getElementById('burgerMenu').appendChild(li);

    // Clear input fields
    document.getElementById('burgerName').value = "";
    document.getElementById('burgerNo').value = "";
    document.getElementById('burgerPrice').value = "";
});
