
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit)

formEl.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

function populateForm () {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData) {
        formEl.email.value = savedFormData.email || '';
        formEl.message.value = savedFormData.message || '';
      }
    };

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

populateForm ()






 

