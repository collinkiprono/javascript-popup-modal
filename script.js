"use sctrict:";

const btnGetStarted = document.querySelector(".get-started");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay-background");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
});

btnGetStarted.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
