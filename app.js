window.addEventListener("DOMContentLoaded", displayProducts);

const URL = "https://68e3ed6d8e116898997a7740.mockapi.io/products";

function displayProducts() {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error!");
      }
      return response.json();
    })
    .then((products) => {
      const container = document.querySelector(".products-container");
      container.innerHTML = products.map(product => `
        <div class="product-card">
          <img src="${product.imageURL}" alt="Product image">
          <div class="product-info">
            <h3>${product.name}</h3>
            <div class="price">${product.price} Ron</div>
            <div class="buttons">
              <button class="details-btn">Details</button>
              <button class="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error(error);
    });
}