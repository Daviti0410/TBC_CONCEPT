//ჩამოსაშლელი მენიუს ფუნქცია

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
///////////////////////////////////////////////////////////////////

////////პირველი სლაიდერის ღილაკების და სქროლის ფუნქცია

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".slider-container");
  const scrollContent = document.querySelector(".image-list1");
  const scrollbarTrack = document.querySelector(".scrollbar-track");
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");
  const leftArrow = document.querySelector(".scroll-arrow.left");
  const rightArrow = document.querySelector(".scroll-arrow.right");

  function updateScrollThumb() {
    const contentWidth = scrollContent.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const scrollLeft = scrollContent.scrollLeft;
    const thumbWidth = (containerWidth / contentWidth) * 100;
    const thumbPosition = (scrollLeft / contentWidth) * 100;
    scrollbarThumb.style.width = `${thumbWidth}%`;
    scrollbarThumb.style.left = `${thumbPosition}%`;
  }

  scrollbarThumb.addEventListener("mousedown", function (event) {
    event.preventDefault();
    const startX = event.pageX;
    const scrollStart = scrollContent.scrollLeft;

    function onMouseMove(event) {
      const deltaX = event.pageX - startX;
      scrollContent.scrollLeft =
        scrollStart +
        (deltaX / scrollbarTrack.clientWidth) * scrollContent.scrollWidth;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  leftArrow.addEventListener("click", function () {
    scrollContent.scrollLeft -= 200;
    updateScrollThumb();
  });

  rightArrow.addEventListener("click", function () {
    scrollContent.scrollLeft += 200;
    updateScrollThumb();
  });

  scrollContent.addEventListener("scroll", updateScrollThumb);

  updateScrollThumb();
});

////// მეორე სლაიდერის ღილაკების და სქროლლბარის ფუნქცია

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(
    ".slider-container.second-slider"
  );
  const scrollContent = document.querySelector(".image-list2");
  const scrollbarTrack = document.querySelector(".track2");
  const scrollbarThumb = document.querySelector(".thumb2");
  const leftArrow = document.querySelector(".left1");
  const rightArrow = document.querySelector(".right1");

  function updateScrollThumb() {
    const contentWidth = scrollContent.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    const scrollLeft = scrollContent.scrollLeft;
    const thumbWidth = (containerWidth / contentWidth) * 100;
    const thumbPosition = (scrollLeft / contentWidth) * 100;
    scrollbarThumb.style.width = `${thumbWidth}%`;
    scrollbarThumb.style.left = `${thumbPosition}%`;
  }

  scrollbarThumb.addEventListener("mousedown", function (event) {
    event.preventDefault();
    const startX = event.pageX;
    const scrollStart = scrollContent.scrollLeft;

    function onMouseMove(event) {
      const deltaX = event.pageX - startX;
      scrollContent.scrollLeft =
        scrollStart +
        (deltaX / scrollbarTrack.clientWidth) * scrollContent.scrollWidth;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  leftArrow.addEventListener("click", function () {
    scrollContent.scrollLeft -= 200;
    updateScrollThumb();
  });

  rightArrow.addEventListener("click", function () {
    scrollContent.scrollLeft += 200;
    updateScrollThumb();
  });

  scrollContent.addEventListener("scroll", updateScrollThumb);

  updateScrollThumb();
});
//პირველი სლაიდერის drag ფუნქცია
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".image-list1");
const secondSlider = document.querySelector(".image-list2");

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

//მეორე სლაიდერის drag ფუნქცია

const end1 = () => {
  isDown = false;
  secondSlider.classList.remove("active");
};

const start1 = (e) => {
  isDown = true;
  secondSlider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - secondSlider.offsetLeft;
  scrollLeft = secondSlider.scrollLeft;
};

const move1 = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - secondSlider.offsetLeft;
  const dist = x - startX;
  secondSlider.scrollLeft = scrollLeft - dist;
};

(() => {
  secondSlider.addEventListener("mousedown", start1);
  secondSlider.addEventListener("touchstart", start1);

  secondSlider.addEventListener("mousemove", move1);
  secondSlider.addEventListener("touchmove", move1);

  secondSlider.addEventListener("mouseleave", end1);
  secondSlider.addEventListener("mouseup", end1);
  secondSlider.addEventListener("touchend", end1);
})();

////ქვედა მარჯვენა ღილაკის ფუნქცია
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

//გვერდითა(burger-menu)-ს ფუნქცია

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
  const sidebar = document.querySelector(".sidebar");
  const close = document.querySelector(".close");

  if (window.innerWidth > 800) {
    burgerMenu.style.display = "none";
    close.style.display = "none";

    if (sidebar.style.display === "flex") {
      sidebar.style.display = "none";
    }
  } else {
    burgerMenu.style.display = "block";
    close.style.display = "none"; // Ensure 'close' is hidden when screen width is <= 800
    sidebar.style.display = "none";
  }
}

// Call the function on window resize
window.addEventListener("resize", checkScreenWidth);

// Call the function on initial load
checkScreenWidth();
