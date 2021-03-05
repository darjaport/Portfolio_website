const projectItem = document.querySelectorAll(".section");

const aboutPage = document.querySelector(".about");
const homePage = document.querySelector(".home");
// const content = document.querySelector('.content')

const btnMoreBg = document.querySelector(".btn__learn-more--bg-screen");
const btnMoreSm = document.querySelector(".btn__learn-more--sm-screen");

const navLinks = document.querySelector(".navigation ul");

// Big screen pages
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("section")) {
    homePage.classList.remove("pointer-event");
    projectItem.forEach((item) => {
      if (e.target.classList.contains("home")) {
        aboutPage.classList.add("middle");
      } else {
        aboutPage.classList.remove("middle");
      }

      item.classList.remove("section--active");
      e.target.classList.add("section--active");
    });
  }
});

// Big screen Learn more btn
btnMoreBg.addEventListener("click", () => {
  homePage.classList.add("pointer-event");

  projectItem.forEach((item) => {
    item.classList.remove("section--active");

    aboutPage.classList.add("section--active");
    aboutPage.classList.remove("middle");
  });
});

// Small screen Learn more btn
btnMoreSm.addEventListener("click", () => {
  aboutPage.scrollIntoView({ behavior: "smooth" });
});

// Small screen navigation
navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target.getAttribute("href");
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  }
});
