// Setting up constants 

const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('price');
const submit = document.getElementById('submit');
const order = document.getElementById('order');

//Task 2: Add Event Listener for Product Selection

function calculateTotalPrice() { //Using function to calculate total price
    const productPrice = parseFloat(product.value); 
    const quantityValue = parseInt(quantity.value);
    const price = productPrice * quantityValue;
    
    totalPrice.textContent = `Total Price: $${price.toFixed(2)}` //Display price on html page
}

// Task 3: Calculate Total Price Dynamically

product.addEventListener('change', calculateTotalPrice); // Using eventListener to change price when different options from dropdown menu are selected
quantity.addEventListener('input', calculateTotalPrice); // Using eventListener to change price when different quantity inputs are entered

// Task 4: Handle order submission

submit.addEventListener('click', function() {
    const chosenProduct = product.options[product.selectedIndex].text;
    const number = quantity.value;
    const finalPrice = totalPrice.textContent 
    
    order.textContent = `You ordered ${number} of ${chosenProduct}. ${finalPrice}`;
});