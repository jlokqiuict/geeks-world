"use_strict";

export const products = [
  {
    name: "Laptop 1",
    type: "Laptop",
    image: "laptop1.png",
    price: 999,
    description:
      "Powerful and lightweight laptop for all your computing needs.",
  },
  {
    name: "Laptop 2",
    type: "Laptop",
    image: "laptop2.png",
    price: 1299,
    description:
      "High-performance laptop with advanced features for professionals.",
  },
  {
    name: "Laptop 3",
    type: "Laptop",
    image: "laptop3.png",
    price: 899,
    description: "Sleek and stylish laptop with a long-lasting battery life.",
  },
  {
    name: "Laptop 4",
    type: "Laptop",
    image: "laptop4.png",
    price: 1499,
    description:
      "Premium laptop with cutting-edge specifications and elegant design.",
  },
  {
    name: "Smartphone 1",
    type: "Smartphone",
    image: "smartphone1.png",
    price: 799,
    description:
      "Flagship smartphone with a stunning display and top-notch camera.",
  },
  {
    name: "Smartphone 2",
    type: "Smartphone",
    image: "smartphone2.png",
    price: 699,
    description:
      "Affordable smartphone with excellent performance and feature set.",
  },
  {
    name: "Smartphone 3",
    type: "Smartphone",
    image: "smartphone3.png",
    price: 1199,
    description:
      "Premium smartphone with advanced security features and fast processing.",
  },
  {
    name: "Smartphone 4",
    type: "Smartphone",
    image: "smartphone4.png",
    price: 899,
    description:
      "Powerful smartphone with a large screen and impressive battery life.",
  },
  {
    name: "TV 1",
    type: "TV",
    image: "tv1.png",
    price: 999,
    description:
      "Ultra HD TV with vibrant colors and immersive audio experience.",
  },
  {
    name: "TV 2",
    type: "TV",
    image: "tv2.png",
    price: 1499,
    description:
      "Smart TV with voice control and a wide range of streaming options.",
  },
  {
    name: "TV 3",
    type: "TV",
    image: "tv3.png",
    price: 799,
    description:
      "Slim and stylish TV with excellent picture quality and connectivity.",
  },
  {
    name: "TV 4",
    type: "TV",
    image: "tv4.png",
    price: 1299,
    description:
      "Large-screen TV with high contrast ratio and smooth motion handling.",
  },
  {
    name: "Smartwatch 1",
    type: "Smartwatch",
    image: "smartwatch1.png",
    price: 299,
    description:
      "Feature-rich smartwatch with fitness tracking and customizable watch faces.",
  },
  {
    name: "Smartwatch 2",
    type: "Smartwatch",
    image: "smartwatch2.png",
    price: 199,
    description:
      "Stylish smartwatch with built-in GPS and heart rate monitoring.",
  },
  {
    name: "Smartwatch 3",
    type: "Smartwatch",
    image: "smartwatch3.png",
    price: 399,
    description: "Advanced smartwatch with LTE connectivity and NFC payments.",
  },
  {
    name: "Smartwatch 4",
    type: "Smartwatch",
    image: "smartwatch4.png",
    price: 349,
    description:
      "Waterproof smartwatch with sleep tracking and music playback.",
  },
];

function generateProductGrid() {
  const productGrid = document.getElementById("product-grid");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Image
    const productImage = document.createElement("img");
    productImage.classList.add("product-img");
    productImage.src = `../products/${product.image}`;
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
