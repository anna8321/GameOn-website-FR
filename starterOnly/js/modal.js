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
const modalBody = document.querySelector(".modal-body");
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



// all form errors messages + confirmation modal form :

function validate() {
  let first = document.forms["reserve"]["first"];
  let last = document.forms["reserve"]["last"];
  let email = document.forms["reserve"]["email"];
  let birthDate = document.forms["reserve"]["birthdate"];
  let quantity = document.forms["reserve"]["quantity"];
  let location = document.forms["reserve"]["location"];

  if (first.value == "") {
    document.getElementById('errorfirst').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    first.focus();
    first.style.border = "2px solid #ff0000";
    return false;
  }

  if (last.value == "") {
    document.getElementById('errorlast').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    last.focus();
    last.style.border = "2px solid #ff0000";
    return false;
  }

  if (email.value == "") {
    document.getElementById('erroremail').innerHTML = "Veuillez saisir votre email.";
    last.focus();
    email.style.border = "2px solid #ff0000";
    return false;
  }

  if (birthDate.value == "") {
    document.getElementById('errorbirthdate').innerHTML = "Vous devez entrer votre date de naissance";
    birthDate.focus();
    birthDate.style.border = "2px solid #ff0000";
    return false;
  }

  if (quantity.value == "") {
    document.getElementById('errorquantity').innerHTML = "Veuillez entrez une valeur numérique";
    quantity.focus();
    quantity.style.border = "2px solid #ff0000";
    return false;
  }
  if (location.value == "") {
    document.getElementById('errorlocation').innerHTML = "Vous devez choisir une option";
    return false;
  }
  if (document.getElementById("checkbox1").checked == false) {
    document.getElementById('errorcheckbox1').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  } else {
    document.getElementById('errorfirst').innerHTML = "";
    document.getElementById('errorlast').innerHTML = "";
    document.getElementById('erroremail').innerHTML = "";
    document.getElementById('errorbirthdate').innerHTML = "";
    document.getElementById('errorquantity').innerHTML = "";
    document.getElementById('errorquantity').innerHTML = "";
    document.getElementById('errorlocation').innerHTML = "";
    modalBody.style.display = "none";
    modalConfirmation.style.display = "flex";
  }
}

// document.getElementById("reserve").addEventListener("submit", function(e) {
//   let error;
//   let last = document.getElementById("last");
//   let first = document.getElementById("first");
//   let email = document.getElementById("email");
//   let birthDate = document.getElementById("birthdate");

//   if (!birthDate.value) {
//     error = "Vous devez entrer votre date de naissance.";
//   }
//   if (!email.value) {
//     error = "Veuillez entrer un email valide";
//   }
//   if (!last.value) {
//     error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
//   }
//   if (!first.value) {
//     error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
//   }

//     if (error) {
//       e.preventDefault();
//       document.getElementById("error").innerHTML = error;
//       return false;
//     } else {
//       validate();
//     }

// } )

// console.log(document.forms["reserve"]["birthdate"]);

// document.forms["reserve"].addEventListener("submit", function(e) {

//   let error;

//   let inputs = this;

//   if(inputs["birdthdate"].value == "") {
//     e.preventDefault();
//     error = "Vous devez entrer votre date de naissance";
//   }
//   // for (var i = 0; i < inputs.length; i++) {
//   //   console.log(inputs[i]);
//   //   if (!inputs[i].value) {
//   //     error = "renseignez tous les champs !";
//   //   }
//   // }

//     if (error) {
//       e.preventDefault();
//       document.getElementById("error").innerHTML = error;
//       return false;
//     }

// } )
