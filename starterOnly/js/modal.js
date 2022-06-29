function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".closeModal");
const modalBody = document.querySelector(".form-modal");
const modalConfirmation = document.querySelector(".modal-confirmation");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeModalBtn.forEach((evt) => evt.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// prevent refresh
modalBody.addEventListener('submit', (e) => {
  e.preventDefault();
  }, false);


// confirmation modal form
function validate() {
  modalBody.style.display = "none";
  modalConfirmation.style.display = "block";
}
