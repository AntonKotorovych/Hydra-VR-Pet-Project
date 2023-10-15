const mainForm = document.querySelector('form[name="main-form"]');

const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const phoneNumber = document.querySelector('input[name="phone-number"]');
const subject = document.querySelector('input[name="subject"]');
const submitBtn = document.querySelector('button[name="submit-btn"]');

console.log(mainForm);

mainForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    subject: subject.value,
  };

  function validateFullName(firstName, lastName) {
    let nameIsValid = true;
    let lastNameIsValid = true;

    if (!firstName.trim().match(/^[a-zA-Z]{1,25}$/)) {
      nameIsValid = false;
    }

    if (!lastName.trim().match(/^[a-zA-Z]{1,25}$/)) {
      lastNameIsValid = false;
    }

    return [nameIsValid, lastNameIsValid];
  }

  const [nameIsValid, lastNameIsValid] = validateFullName(formData.firstName, formData.lastName);

  console.log(formData);
});
