function loadPage(page) {
  let content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content

  fetch(page + '.html')
    .then(response => response.text())
    .then(html => {
      content.innerHTML = html;
    })
    .catch(error => {
      content.innerHTML = '<p>Error loading page.</p>';
      console.error("Error:", error);
    });
}

// Load the home page by default
window.onload = () => loadPage('home');



let prevScrollPos = window.pageYOffset;
    const header = document.getElementById("header");

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        // Hide the header on scroll down
        header.classList.remove("visible");
      } else {
        // Show the header on scroll up
        header.classList.add("visible");
      }
      prevScrollPos = currentScrollPos;
    };

document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});



function plus() {
  var preValue = document.getElementById("counter").value;
  document.getElementById("counter").value = parseInt(preValue) + 1;
}

function minus() {
  var preValue = document.getElementById("counter").value;
  if (parseInt(preValue) != 0) {
    document.getElementById("counter").value = parseInt(preValue) - 1;
  }
}

function rotate() {
  document.getElementById("rotateSVG").classList.toggle("rotate-180");
}

function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function changeDetails(imageSrc, title, price) {
  // Change image
  document.getElementById("mainImage").src = imageSrc;

  // Change title
  document.getElementById("mainTitle").innerText = title;

  // Change price
  document.getElementById("mainPrice").innerText = price;
}




// Test




// function redirectToDetails(productId) {
//   // Redirect to detail page with product ID in the query string
//   window.location.href = `products.html?productId=${productId}`;
// }



// const products = {
//   1: { name: "Product A", price: "$100", description: "This is Product A." },
//   2: { name: "Product B", price: "$200", description: "This is Product B." },
//   3: { name: "Product C", price: "$300", description: "This is Product C." },
// };

// // Function to get query parameter (e.g., productId)
// function getQueryParam(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// }

// // Display product details
// const productId = getQueryParam("productId");
// const productDetailsContainer = document.getElementById("product-details");

// if (productId && products[productId]) {
//   const product = products[productId];
//   productDetailsContainer.innerHTML = `
//     <h2>${product.name}</h2>
//     <p><strong>Price:</strong> ${product.price}</p>
//     <p><strong>Description:</strong> ${product.description}</p>
//   `;
// } else {
//   productDetailsContainer.innerHTML = `<p>Product not found.</p>`;
// }




// function redirectToDetails(productId) {
//   window.location.href = `products.html?productId=${productId}`;
// }


// const products = [
//   { id: 1, name: "Product A", image: "https://via.placeholder.com/200", price: "$100", description: "Description of Product A.", title: "Amazing Product A" },
//   { id: 2, name: "Product B", image: "https://via.placeholder.com/200", price: "$200", description: "Description of Product B.", title: "Amazing Product B" },
//   { id: 3, name: "Product C", image: "https://via.placeholder.com/200", price: "$300", description: "Description of Product C.", title: "Amazing Product C" },
// ];

// // Function to get query parameters from the URL
// function getQueryParam(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// }

// const productId = getQueryParam("productId");
// const productDetailsContainer = document.getElementById("product-details");

// // Display product details based on the product ID
// const product = products.find((p) => p.id == productId);
// if (product) {
//   productDetailsContainer.innerHTML = `
//     <img class="w-full h-64 object-cover rounded-lg mb-4" src="${product.image}" alt="${product.name}">
//     <h2 class="text-3xl font-bold mb-4">${product.title}</h2>
//     <p class="text-gray-700 mb-2"><strong>Name:</strong> ${product.name}</p>
//     <p class="text-gray-700 mb-2"><strong>Price:</strong> ${product.price}</p>
//     <p class="text-gray-500 mb-4"><strong>Description:</strong> ${product.description}</p>
//     <button onclick="window.history.back()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back to Shop</button>
//   `;
// } else {
//   productDetailsContainer.innerHTML = `<p class="text-center text-gray-500">Product not found.</p>`;
// }




const products = [
  {
    id: 0,
    title: "Cortoon Astronaut T-Shirts",
    image: "https://via.placeholder.com/200",
    price: "$78",
    description: "This is an amazing t-shirt with a fun cartoon astronaut design.",
  },
  {
    id: 1,
    title: "Cortoon Astronaut T-Shirts",
    image: "https://via.placeholder.com/200",
    price: "$83",
    description: "Stylish and comfortable t-shirt with a unique design.",
  },
];

// View product details
function viewProductDetails(productId) {
  // Find the product
  const product = products.find(p => p.id === productId);

  // Populate the product details section
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-title').innerText = product.title;
  document.getElementById('product-price').innerText = product.price;
  document.getElementById('product-description').innerText = product.description;

  // Hide shop section and show product details section
  document.getElementById('shop-section').classList.add('hidden');
  document.getElementById('product-details-section').classList.remove('hidden');
}

// Back to shop
function backToShop() {
  // Show shop section and hide product details section
  document.getElementById('shop-section').classList.remove('hidden');
  document.getElementById('product-details-section').classList.add('hidden');
}