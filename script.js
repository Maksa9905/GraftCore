function showPage(pageNumber) {
  var currentPage = document.querySelector(".active"); //page1 class="page active"
  var nextPage = document.getElementById("page" + pageNumber); //page2 class="page"

  if (pageNumber > currentPage.id.slice(-1)) {
    nextPage.classList.add("active", "next");
  } else {
    nextPage.classList.add("active", "previous");
  }

  currentPage.classList.remove("active", "next", "previous");
}
