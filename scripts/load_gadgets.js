"use_strict";

import { products } from "./gadgets.js";

function generateProductGrid() {
  const productGrid = document.getElementById("product-grid");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Image
    const productImage = document.createElement("img");
    productImage.classList.add("product-img");
    productImage.src = product.image;
    productImage.alt = product.name;

    // Name
    const productName = document.createElement("h3");
    productName.textContent = product.name;

    // Price
    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = "Price: $" + product.price;
    productPrice.style.color = "#DAA520";
    productPrice.style.fontWeight = "bold";

    // Description
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.textContent = product.description;

    // Add to Cart button
    const addToCartButton = document.createElement("a");
    addToCartButton.classList.add("add-to-cart-button");
    addToCartButton.href = "#";
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa", "fa-cart-plus");
    const buttonLabel = document.createElement("span");
    buttonLabel.textContent = "Add to Cart";
    addToCartButton.appendChild(cartIcon);
    addToCartButton.appendChild(buttonLabel);

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDescription);
    productCard.appendChild(addToCartButton);

    productGrid.appendChild(productCard);
  });
}

generateProductGrid();
