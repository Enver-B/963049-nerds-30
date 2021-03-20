const letterButton = document.querySelector(".button-write-us");
const letterPopup = document.querySelector(".modal-window");
const letterClose = letterPopup.querySelector(".modal-close");
const letterForm = letterPopup.querySelector(".letter-form");
const letterName = letterPopup.querySelector(".form-name-surname");
const letterMail = letterPopup.querySelector(".form-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name")
} catch (err) {
  isStorageSupport = false;
}

letterButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  if (storage) {
    letterName.value = storage;
    letterMail.focus()
  } else {
    letterName.focus();
  }
})

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
})

letterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
})

letterForm.addEventListener("submit", function (evt) {
  if (!letterName.value || !letterMail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", letterName.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show")
    }
  }
});


