const mainForm = document.querySelector('form[name="main-form"]');

const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const phoneNumber = document.querySelector('input[name="phone-number"]');
const subject = document.querySelector('input[name="subject"]');
const textarea = document.querySelector('textarea[name="textarea"]');
const submitBtn = document.querySelector('button[name="submit-btn"]');

const errorMessage = document.querySelector('.error-message');

mainForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    subject: subject.value,
    textarea: textarea.value,
  };

  function formDataIsValid(firstName, lastName, email, phoneNumber, subject, textarea) {
    let firstNameIsValid = true;
    let lastNameIsValid = true;
    let emailIsValid = true;
    let phoneNumberIsValid = true;
    let subjectIsValid = true;
    let textareaIsValid = true;

    const textRegExp = /^[a-zA-Z]{1,25}$/;
    const subjectRegExp = /^[A-Za-z ]{1,25}$/;
    const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    const phoneNumberRegExp = /\(\d{3}\) \d{3}-\d{4}/;
    const textareaRegExp = /^[\s\S]{1,5000}$/;

    if (!firstName.trim().match(textRegExp)) {
      firstNameIsValid = false;
    }

    if (!lastName.trim().match(textRegExp)) {
      lastNameIsValid = false;
    }

    if (!email.trim().match(emailRegExp)) {
      emailIsValid = false;
    }

    if (!phoneNumber.trim().match(phoneNumberRegExp)) {
      phoneNumberIsValid = false;
    }

    if (!subject.trim().match(subjectRegExp)) {
      subjectIsValid = false;
    }

    if (!textarea.trim().match(textareaRegExp)) {
      textareaIsValid = false;
    }

    return [firstNameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid];
  }

  const [firstNameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid] = formDataIsValid(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.phoneNumber,
    formData.subject,
    formData.textarea
  );

  console.log(firstNameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid);

  if (!firstNameIsValid) {
    firstName.classList.remove('valid');
    firstName.classList.add('invalid');
    firstName.nextElementSibling.style.display = 'block';
  } else {
    firstName.classList.remove('invalid');
    firstName.classList.add('valid');
    firstName.nextElementSibling.style.display = 'none';
  }

  if (!lastNameIsValid) {
    lastName.classList.remove('valid');
    lastName.classList.add('invalid');
    lastName.nextElementSibling.style.display = 'block';
  } else {
    lastName.classList.remove('invalid');
    lastName.classList.add('valid');
    lastName.nextElementSibling.style.display = 'none';
  }

  if (!emailIsValid) {
    email.classList.remove('valid');
    email.classList.add('invalid');
    email.nextElementSibling.style.display = 'block';
  } else {
    email.classList.remove('invalid');
    email.classList.add('valid');
    email.nextElementSibling.style.display = 'none';
  }

  if (!phoneNumberIsValid) {
    phoneNumber.classList.remove('valid');
    phoneNumber.classList.add('invalid');
    phoneNumber.nextElementSibling.style.display = 'block';
  } else {
    phoneNumber.classList.remove('invalid');
    phoneNumber.classList.add('valid');
    phoneNumber.nextElementSibling.style.display = 'none';
  }

  if (!subjectIsValid) {
    subject.classList.remove('valid');
    subject.classList.add('invalid');
    subject.nextElementSibling.style.display = 'block';
  } else {
    subject.classList.remove('invalid');
    subject.classList.add('valid');
    subject.nextElementSibling.style.display = 'none';
  }

  if (!textareaIsValid) {
    textarea.classList.remove('valid');
    textarea.classList.add('invalid');
    textarea.nextElementSibling.style.display = 'block';
  } else {
    textarea.classList.remove('invalid');
    textarea.classList.add('valid');
    textarea.nextElementSibling.style.display = 'none';
  }

  async function sendFormUserData(formUserData) {
    const url = 'https://hydra-vr-default-rtdb.firebaseio.com/';

    try {
      const response = await fetch(`${url}users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formUserData),
      });

      if (!response.ok) throw new Error(`HTTP error. Status: ${response.status}`);

      const data = await response.json();
      console.log('Succeed ', data);
    } catch (err) {
      console.error('unsuccessful ', err);
    }
  }

  if (firstNameIsValid && lastNameIsValid && emailIsValid && phoneNumberIsValid && subjectIsValid && textareaIsValid) sendFormUserData(formData);
});
