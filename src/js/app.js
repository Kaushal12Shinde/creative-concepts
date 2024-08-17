// Open menu in mobile

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-main");

const toggleNav = () => {
  mainNav.classList.toggle("open");
};

hamburger.addEventListener("click", toggleNav);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});


const mobile = window.innerWidth > 767;

const logoSlider = document.querySelector(".logo-slider");

if (logoSlider) {
  var logoSliderRef = tns({
    container: logoSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 3,
      },

      768: {
        items: 5,
      },

      1200: {
        items: 6,
      },
    },
  });
}