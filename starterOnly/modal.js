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
const modalClose = document.querySelectorAll(".close");

// launch & close modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((cross) => cross.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

let username = document.getElementById("first");
let options = document.getElementsByName("location");
let tos = document.getElementById("checkbox1");
let birthdate = document.getElementById("birthdate");
let errorWrapper = document.getElementById("error-container");
let submit = document.querySelectorAll(".submit-btn");
submit.forEach((btn) => btn.addEventListener("click", validateForm));

console.log(options[0].checked);

function getOptions() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) return true;
  }
}

function validateForm() {
  console.log(getOptions())
  if (username.value.length < 2) {
    errorWrapper.style.display = "block";
    errorWrapper.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  } else if (!getOptions()) {
    errorWrapper.style.display = "block";
    errorWrapper.innerHTML = "Vous devez choisir une option.";
    return false;
  } else if (tos.checked == false) {
    errorWrapper.style.display = "block";
    errorWrapper.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  } else if (birthdate.value == "") {
    errorWrapper.style.display = "block";
    errorWrapper.innerHTML = "Vous devez entrer votre date de naissance.";
    return false;
  }
}