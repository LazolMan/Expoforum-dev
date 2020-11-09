let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector(".search-form__input");

function openSearch() {
  searchInput.style.width = "150px";
}

function hideSearch() {
  if (!searchInput.value) {
    searchInput.style.width = "0";
  }
}

searchForm.addEventListener("mouseover", openSearch);
searchForm.addEventListener("mouseout", hideSearch);
searchForm.addEventListener("blur", hideSearch);
