
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit)

function saveToLocalStorage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  const throttledFormData = throttle(saveToLocalStorage, 500);
  formEl.addEventListener('input', throttledFormData);

function populateForm () {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData) {
        formEl.email.value = savedFormData.email || '';
        formEl.message.value = savedFormData.message || '';
      }
    };

function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: {email, message},
    } = e.currentTarget;
    if (email.value === '' || message.value === '') {
        return alert('Fill in all the fields');
    }
const formFeedback = {
    email: email.value,
    message: message.value,
}
console.log(formFeedback);
    e.currentTarget.reset();
    const formData = {};
    localStorage.removeItem(STORAGE_KEY);
}

populateForm ()






 

