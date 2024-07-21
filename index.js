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
