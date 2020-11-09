let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector(".search-form__input");
let menuOpen = document.querySelector(".icon-bars");
let menuClose = document.querySelector(".icon-close");
let menu = document.querySelector(".menu");
let focus = false;

let openSearch = () => (searchInput.style.width = "100%");
let hideSearch = () => {
  if (!searchInput.value && !focus) {
    searchInput.style.width = "0";
    focus = false;
  }
};

let searchFocus = () => (focus = true);
let searchBlur = () => {
  focus = false;
  hideSearch();
};

let openMenu = () => (menu.style.left = "0");
let closeMenu = () => (menu.style.left = "-55%");

searchForm.addEventListener("mouseover", openSearch);
searchForm.addEventListener("mouseout", hideSearch);

searchInput.addEventListener("focus", searchFocus);
searchInput.addEventListener("blur", searchBlur);

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
