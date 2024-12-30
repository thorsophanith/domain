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
  document.getElementById('mainImage').src = src;
}
function changePrice(src) {
  document.getElementById('mainPrice').src = src;
}

