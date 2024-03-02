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

// Проверка валидности Email; возвращает true - если значение email корректно, false - если некорректно
function valideEmail(Email) {
  let email__error_title = document.getElementById(
    "signin-page__inner__email__error-title"
  );
  let flag;
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (validateEmail.test(Email.value)) {
    Email.style.backgroundColor = "#f1f1f1";
    Email.style.borderColor = "#8b8b8b";
    email__error_title.innerHTML = " ";
    flag = true;
  } else {
    Email.style.backgroundColor = "#ffd6d6";
    Email.style.borderColor = "red";
    email__error_title.innerHTML = "Email введен неверно";
    flag = false;
  }

  return flag;
}

function validePassword(password, confirm_password) {
  let password__error_title = document.getElementById(
    "signin-page__inner__password__error-title"
  );
  const validatePassword =
    /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

  let flag = true;

  console.log(validatePassword.test(password.value));
  if (validatePassword.test(password.value)) {
    if (password.value != confirm_password.value) {
      password.style.borderColor = "red";
      password.style.backgroundColor = "#ffd6d6";
      confirm_password.style.borderColor = "red";
      confirm_password.style.backgroundColor = "#ffd6d6";
      flag = false;
      password__error_title.innerHTML = "Пароли не совпадают";
    } else {
      password.style.borderColor = "#8b8b8b";
      password.style.backgroundColor = "#f1f1f1";
      confirm_password.style.borderColor = "#8b8b8b";
      confirm_password.style.backgroundColor = "#f1f1f1";
      password__error_title.innerHTML = " ";
    }
  } else {
    password__error_title.innerHTML =
      "Пароль должен содержать минимум 8 символов, включая строчные и заглавные буквы латинского алфавита, числа 0-9, и специальные знаки !#$%&?";
    flag = false;
    password.style.borderColor = "red";
    password.style.backgroundColor = "#ffd6d6";
    confirm_password.style.borderColor = "red";
    confirm_password.style.backgroundColor = "#ffd6d6";
  }

  return flag;
}

function sendEmail() {
  let Email = document.getElementById("signin-page__email-block__email");
  let password = document.getElementById("signin-page__email-block__password");
  let confirm_password = document.getElementById(
    "signin-page__email-block__confirm-password"
  );

  valideEmail(Email);
  validePassword(password, confirm_password);
  if (valideEmail(Email) && validePassword(password, confirm_password)) {
    document.getElementById("confirm-email-page__inner__email").innerHTML =
      Email.value;
    showPage("page5");
  }
}
