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

let currentIndex = 0;

const slides = document.querySelectorAll(".first-sldier .slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const scrollbarThumb = document.querySelector(".scrollbar-thumb");
const totalSlides = slides.length;
const visibleSlides = 3;

document.querySelector(".next").addEventListener("click", () => {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
  updateScrollbar();
});

document.querySelector(".prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - visibleSlides;
  }

  updateSlider();
  updateScrollbar();
});

function updateSlider() {
  const offset = -currentIndex * (100 / visibleSlides);
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

function updateScrollbar() {
  const thumbWidth = 100 / 2.3;
  const thumbPosition = currentIndex * thumbWidth;
  scrollbarThumb.style.width = `${thumbWidth}%`;
  scrollbarThumb.style.transform = `translateX(${thumbPosition}%)`;
}

updateScrollbar();

let secondCurrentIndex = 0;

const secondSlides = document.querySelectorAll(".second-slider .slide");
const secondSliderWrapper = document.querySelector(
  ".second-slider .slider-wrapper"
);
const secondScrollbarThumb = document.querySelector(
  ".second-slider .scrollbar-thumb"
);
const secondTotalSlides = secondSlides.length;
const secondVisibleSlides = 3;

document.querySelector(".second-next").addEventListener("click", () => {
  if (secondCurrentIndex < secondTotalSlides - secondVisibleSlides) {
    secondCurrentIndex++;
  } else {
    secondCurrentIndex = 0;
  }
  updateSecondSlider();
  updateSecondScrollbar();
});

document.querySelector(".second-prev").addEventListener("click", () => {
  if (secondCurrentIndex > 0) {
    secondCurrentIndex--;
  } else {
    secondCurrentIndex = secondTotalSlides - secondVisibleSlides;
  }
  updateSecondSlider();
  updateSecondScrollbar();
});

function updateSecondSlider() {
  const offset = -secondCurrentIndex * (100 / secondVisibleSlides);
  secondSliderWrapper.style.transform = `translateX(${offset}%)`;
}

function updateSecondScrollbar() {
  const thumbWidth = 100 / 1.5;
  const thumbPosition = secondCurrentIndex * thumbWidth;
  secondScrollbarThumb.style.width = `${thumbWidth}%`;
  secondScrollbarThumb.style.transform = `translateX(${thumbPosition}%)`;
}

updateSecondScrollbar();

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
