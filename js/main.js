const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav__toggle", "nav__menu");
// remove menu mobile
const nav__link = document.querySelectorAll(".nav__link");
function linkAction() {
  const nav__menu = document.getElementById("nav__menu");
  nav__menu.classList.remove("show");
}

nav__link.forEach((link) => {
  link.addEventListener("click", linkAction);
});
// scroll sections active link
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]") //  sectionHeight + sectionTop full height actually
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
// scrool reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home__title", {});
sr.reveal(".home__Scroll", { delay: 2000, origin: "bottom" });
sr.reveal(".home__img", { delay: 2000, origin: "right" });
// about section
sr.reveal(".about__img", { delay: 500 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__text", { delay: 500 });
sr.reveal(".bx", { delay: 600 });
//skills
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills-img", { delay: 400 });
// protfolio
sr.reveal(".protfolio-img", { interval: 200 });
// contact
sr.reveal(".contact__subtitle");
sr.reveal(".contact__text ", { interval: 200 });
sr.reveal(".contact__input ", { delay: 400 });
sr.reveal(".contact__button ", { delay: 600 });
