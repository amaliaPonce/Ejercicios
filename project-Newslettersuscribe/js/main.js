const formElement = document.querySelector('.form');
const inputEmail = document.querySelector('.form_imput-email');
const submitButton = document.querySelector('.form_submit-button');
const successDiv = document.querySelector('.succes');
const overlayDiv = document.querySelector('.overlay');
const errorModifier = 'form--error';
const overlayModifier = 'with-overlay';
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputEmail.addEventListener('blur', () => {
  const email = inputEmail.value;
  const isValidEmail = emailValidationRegex.test(email);
  if (isValidEmail) {
    formElement.classList.remove(errorModifier);
  } else {
    formElement.classList.add(errorModifier);
  }
});

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  successDiv.style.display = 'block';
  document.body.classList.add(overlayModifier);
  overlayDiv.style.display = 'block';
});

const dismissButton = document.querySelector('.succes_dismiss');
dismissButton.addEventListener('click', () => {
  successDiv.style.display = 'none';
  document.body.classList.remove(overlayModifier);
  overlayDiv.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
  successDiv.style.display = 'none';
  document.body.classList.remove(overlayModifier);
});
