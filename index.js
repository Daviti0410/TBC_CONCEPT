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

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  document.querySelector(".prev").addEventListener("click", function () {
    changeSlide(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    changeSlide(1);
  });

  function changeSlide(direction) {
    if (direction === 1 && currentSlide >= totalSlides - 1) {
      currentSlide = 0;
    } else if (direction === -1 && currentSlide <= 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide += direction;
    }
    updateSlidePosition();
  }

  function updateSlidePosition() {
    const slider = document.querySelector(".slides");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});
