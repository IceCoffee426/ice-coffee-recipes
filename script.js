// Navigation menu open and closing mobile view

document.querySelector(".burger").onclick = function () {
  document.querySelector("[data-nav-menu-mobile]").classList.toggle("active");
};

const buttons = document.querySelectorAll("[data-dropdown-btn-mobile]");
buttons.forEach(
  (button) =>
    (button.onclick = function () {
      button.nextElementSibling.classList.toggle("active");
    })
);

// Email box form submission

document.getElementById("email").addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

document.getElementById("sign-up-button").addEventListener("click", (e) => {
  if (document.getElementById("email").checkValidity()) {
    e.preventDefault();
    alert("Iced coffees coming your way - high five!");
  }
});

// Carousel auto change slides

window.onload = function () {
  const slides = document.getElementsByClassName("recipe");
  slides[0].classList.add("active");

  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      if (i + 1 === slides.length) {
        slides[i].classList.remove("active");
        slides[0].classList.add("active");
        return;
      }
      if (slides[i].classList.contains("active")) {
        slides[i].classList.remove("active");
        slides[i + 1].classList.add("active");
        return;
      }
    }
  }, 4000);
};
