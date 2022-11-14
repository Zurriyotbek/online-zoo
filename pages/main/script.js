let navList = document.querySelector(".nav__list");
let navItems = document.querySelectorAll(".nav__link");

navList.addEventListener("click", (e) => {
  let currentTarget = e.target;
  if (!currentTarget.matches(".nav__link--active")) {
    navItems[0].classList.remove("nav__link--active");
    navItems[5].classList.remove("nav__link--active");
  }
});
