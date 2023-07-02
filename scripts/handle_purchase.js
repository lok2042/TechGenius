"use_strict";

import { products } from "./gadgets.js";

const calculateButton = document.getElementById("calculate-button");
const resetButton = document.getElementById("reset-button");
const productSelect = document.getElementById("product-select");
const quantityInput = document.getElementById("quantity");
const discountInput = document.getElementById("discount");
const totalCostInput = document.getElementById("total-cost");

// Generate product options
function generateProductOptions() {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.price;
    option.textContent = `${product.name} - \$${product.price}`;
    productSelect.appendChild(option);
  });
}

// Calculate total cost
function calculateTotalCost() {
  const productPrice = parseFloat(productSelect.value);
  const quantity = parseInt(quantityInput.value);
  const discount = parseFloat(discountInput.value);

  if (isNaN(productPrice) || isNaN(quantity) || isNaN(discount)) {
    alert("Please enter valid numeric values.");
    return;
  }

  const discountedPrice = productPrice - (productPrice * discount) / 100;
  const totalCost = discountedPrice * quantity;

  totalCostInput.value = totalCost.toFixed(2);
}

// Reset form
function resetForm() {
  productSelect.selectedIndex = 0;
  quantityInput.value = "";
  discountInput.value = "";
  totalCostInput.value = "";
}

// Event listeners
calculateButton.addEventListener("click", calculateTotalCost);
resetButton.addEventListener("click", resetForm);

// Generate product options on page load
generateProductOptions();
