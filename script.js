const projectItem = document.querySelectorAll(".section");

const aboutPage = document.querySelector(".about");
const homePage = document.querySelector(".home");
// const content = document.querySelector('.content')

const btnMoreBg = document.querySelector(".btn__learn-more--bg-screen");
const btnMoreSm = document.querySelector(".btn__learn-more--sm-screen");

const navigation = document.querySelector(".navigation");
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

const hoverNavLink = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".navigation").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

navigation.addEventListener("mouseover", hoverNavLink.bind(0.5));
navigation.addEventListener("mouseout", hoverNavLink.bind(1));

navigation.addEventListener("click", (e) => {
  const clicked = e.target.closest(".navigation__item");
  const siblings = document.querySelectorAll(".navigation__item");

  siblings.forEach((el) => {
    el.classList.remove("avtive__nav-link");
  });
  clicked.classList.add("avtive__nav-link");
});
