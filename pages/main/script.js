let navList = document.querySelector(".header__list");
let navItems = document.querySelectorAll(".header__link");

navList.addEventListener("click", (e) => {
  let currentTarget = e.target;
  if (!currentTarget.matches(".header__link--active")) {
    navItems[0].classList.remove("header__link--active");
  }
});
