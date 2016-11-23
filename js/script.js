var link = document.querySelector(".btn-footer-contacts");
var popup = document.querySelector(".index-footer-map__contacts-form");
var close = popup.querySelector(".btn-form__close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("index-footer-map__contacts-form__show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("index-footer-map__contacts-form__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("index-footer-map__contacts-form__show")) {
      popup.classList.remove("index-footer-map__contacts-form__show");
    }
  }
});
