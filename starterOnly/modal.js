function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
// modal elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let options = document.getElementsByName("location");
let tos = document.getElementById("checkbox1");
let modalBody = document.getElementById("modal-body");
let submit = document.querySelectorAll(".submit-btn");
let modalForm = document.getElementById('modalForm');
let homePage = document.getElementsByClassName('hero-section');
// launch & close modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((cross) => cross.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  homePage[0].classList.add('modalopened');
}
// event listener for submit button
modalForm.addEventListener("submit", function(event) {
  event.preventDefault()
  
  validateForm()
});
// get selected option
function getOptions() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) return true;
  }
}
function validateForm() {
  let formValid = true;
  if(firstname.value.length < 2) {
    firstname.parentNode.setAttribute('data-error-visible', true)
    formValid = false
  } else {
    firstname.parentNode.setAttribute('data-error-visible', false)
  }
  if(lastname.value.length < 2) {
    lastname.parentNode.setAttribute('data-error-visible', true)
    formValid = false
  }  else {
    lastname.parentNode.setAttribute('data-error-visible', false)
  }
  if(!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    email.parentNode.setAttribute('data-error-visible', true)
    formValid = false
  } else {
    email.parentNode.setAttribute('data-error-visible', false)
  }
  if(birthdate.value == "" || birthdate.value == null || birthdate.value == undefined) {
    birthdate.parentNode.setAttribute('data-error-visible', true)
    formValid = false
  } else {
    birthdate.parentNode.setAttribute('data-error-visible', false)
  }
  if(!getOptions()) {
    options[0].parentNode.setAttribute('data-error-visible', true)
    formValid = false
  } else {
    options[0].parentNode.setAttribute('data-error-visible', false)
  }
  if(!tos.checked) {
    tos.parentNode.setAttribute('data-error-visible', true)
    formValid = false
  } else {
    tos.parentNode.setAttribute('data-error-visible', false)
  }
  if(formValid == true) {
    openValidation()
  }
}
function openValidation() {
  modalBody.classList.toggle('validated-body')
}
function closeModal() {
  let modal = document.getElementById('bground');
  modal.style.display = "none";
  homePage[0].classList.remove('modalopened');
}