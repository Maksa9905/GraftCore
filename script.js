function showPage(pageId) {
  var pageNumber = pageId.slice(-1);
  var currentPage = document.querySelector(".active");
  var nextPage = document.getElementById("page" + pageNumber);

  var previousPage = document.querySelector(".animation_slide_to_left");
  if (previousPage == null)
    previousPage = document.querySelector(".animation_slide_to_right");

  if (previousPage != null) {
    previousPage.classList.remove(
      "animation_slide_to_left",
      "animation_slide_to_right"
    );
  }

  currentPage.classList.remove(
    "active",
    "animation_slide_to_right",
    "animation_slide_from_left",
    "animation_slide_to_left",
    "animation_slide_from_right"
  );

  if (pageNumber > currentPage.id.slice(-1)) {
    nextPage.classList.add("active", "animation_slide_from_right");
    currentPage.classList.add("animation_slide_to_left");
  } else {
    nextPage.classList.add("active", "animation_slide_from_left");
    currentPage.classList.add("animation_slide_to_right");
  }
}

function animButtons(buttonNumber) {
  var currentButton = document.querySelector(".but-active");
  var nextButton = document.getElementById("but" + buttonNumber);

  if (nextButton != currentButton) {
    nextButton.classList.remove("animation_button_diactivate");
    nextButton.classList.add("but-active", "animation_button_activate");
    currentButton.classList.remove("but-active", "animation_button_activate");
    currentButton.classList.add("animation_button_diactivate");
  }
}

function nextBoard() {
  var currentButton = document.querySelector(".but-active");

  if (currentButton.id.slice(-1) == "3") {
    showPage("page4");
  }

  var boardNumber = parseInt(currentButton.id.slice(-1)) + 1;
  var nextButton = document.getElementById("but" + boardNumber);

  nextButton.classList.remove("animation_button_diactivate");
  nextButton.classList.add("but-active", "animation_button_activate");
  currentButton.classList.remove("but-active", "animation_button_activate");
  currentButton.classList.add("animation_button_diactivate");

  var currentBoard = document.querySelector(".board-active");
  var nextBoard = document.getElementById("board" + boardNumber);

  if (nextBoard != currentBoard) {
    nextBoard.classList.remove("animation_board_diactivate");
    nextBoard.classList.add("board-active", "animation_board_activate");
    currentBoard.classList.remove("board-active", "animation_board_activate");
    currentBoard.classList.add("animation_board_diactivate");
  }
}

function showBoard(boardId) {
  var boardNumber = boardId.slice(-1);
  var currentBoard = document.querySelector(".board-active");
  var nextBoard = document.getElementById("board" + boardNumber);

  if (nextBoard != currentBoard) {
    nextBoard.classList.remove("animation_board_diactivate");
    nextBoard.classList.add("board-active", "animation_board_activate");
    currentBoard.classList.remove("board-active", "animation_board_activate");
    currentBoard.classList.add("animation_board_diactivate");
  }
}
