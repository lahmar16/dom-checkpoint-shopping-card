const decrementButtons = document.querySelectorAll('.quantity-minus');
const incrementButtons = document.querySelectorAll('.quantity-plus');
const removeButtons = document.querySelectorAll('.remove-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const quantityElements = document.querySelectorAll('.product-quantity');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

// Ajouter des écouteurs d'événements pour les boutons de décrementation
decrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const quantityElement = product.querySelector('.product-quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons d'incrémentation
incrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const quantityElement = product.querySelector('.product-quantity');
    let quantity = parseInt(quantityElement.textContent);

    quantity++;
    quantityElement.textContent = quantity;
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons de suppression
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    product.remove();
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons "J'aime"
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

// Calculer le prix total du panier
function calculateTotalPrice() {
  let totalPrice = 0;

  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    const quantityElement = product.querySelector('.product-quantity');
    const priceElement = product.querySelector('.product-price');
    const quantity = parseInt(quantityElement.textContent);
    const price = parseFloat(priceElement.textContent.match(/\d+\.\d+/)[0]);
    totalPrice += quantity * price;
  });

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Calculer le prix total initial
calculateTotalPrice();
