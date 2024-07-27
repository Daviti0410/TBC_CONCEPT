function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll(".mega-box");

  allDropdowns.forEach(function (dropdown) {
    if (dropdown.id !== id) {
      dropdown.style.visibility = "hidden";
    }
    if (dropdown.id === "offers-dropdown") {
    }
  });
  if (
    dropdown.style.visibility === "hidden" ||
    dropdown.style.visibility === ""
  ) {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style.visibility = "hidden";
  }
}
window.onclick = function (event) {
  if (!event.target.matches(".nav-links a")) {
    const allDropdowns = document.querySelectorAll(".mega-box");
    allDropdowns.forEach(function (dropdown) {
      dropdown.style.visibility = "hidden";
    });
  }
};

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".image-list");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuItems = document.querySelector(".menu-items");

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
      menuItems.style.display = "flex";
      menuToggle.textContent = "❌";
    } else {
      menuItems.style.display = "none";
      menuToggle.textContent = "⋮";
    }
  });
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const burgerbar = document.querySelector(".burger-menu");
  const close = document.querySelector(".close");
  sidebar.style.display = "flex";
  burgerbar.style.display = "none";
  close.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const burgerbar = document.querySelector(".burger-menu");
  const close = document.querySelector(".close");
  sidebar.style.display = "none";
  burgerbar.style.display = "flex";
  close.style.display = "none";
}
function checkScreenWidth() {
  const burgerMenu = document.querySelector(".burger-menu");
  if (window.innerWidth > 800) {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);
