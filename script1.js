// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

@media screen and (max-width: 720px) {
  /*changes reflects on screen with a width of 720px and below*/
}

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

@media screen and (max-width: 420px) {
  .hero img {
    height: 37.5rem;
    width: 23rem;
  }

  .bio {
    width: 18.3rem;
  }

  .project-container {
    width: 17.875rem;
  }

  .contact-form-container {
    max-width: 17.75rem;
  }
} 