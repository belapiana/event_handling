const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('price');
const submit = document.getElementById('submit');
const orderSummary = document.getElementById('order-summary');

//Task 2: Add Event Listener for Product Selection 
function calculateTotalPrice() {
    const productPrice = parseFloat(product.value);
    const quantityValue = parseInt(quantity.value);
    const price = productPrice * quantityValue;
    
    totalPrice.textContent = `Total Price: $${price.toFixed(2)}`
}

product.addEventListener('change', calculateTotalPrice);
quantity.addEventListener('input', calculateTotalPrice);

// // Handle order submission
// placeOrderButton.addEventListener('click', function() {
//     const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
//     const quantity = quantityInput.value;
//     const totalPrice = totalPriceElement.textContent;
    
//     orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
// });