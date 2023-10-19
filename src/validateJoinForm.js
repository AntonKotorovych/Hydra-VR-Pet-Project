const joinForm = document.getElementById('mainForm');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const selectCountry = document.getElementById('country');
const checkbox = document.getElementById('ageCheck');
const vrSizeContainer = document.querySelector('.radio-buttons');
const vrSize = document.getElementsByName('vrSize');
const subject = document.getElementById('subject');
const textarea = document.getElementById('textarea');
const rateUs = document.getElementById('ratingRange');
const submitBtn = document.getElementById('submitBtn');

const errorMessage = document.querySelector('.error-message');

joinForm.addEventListener('submit', e => {
  e.preventDefault();
  let curVrSize;
  for (const radioButton of vrSize) {
    if (radioButton.checked) {
      curVrSize = radioButton.value;
      break;
    }
  }

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    selectCountry: +selectCountry.value,
    checkbox: checkbox.checked,
    vrSize: curVrSize,
    subject: subject.value,
    textarea: textarea.value,
    rateUs: rateUs.value,
  };

  function formDataIsValid(firstName, lastName, email, phoneNumber, selectCountry, checkbox, vrSize, subject, textarea) {
    let firstNameIsValid = true;
    let lastNameIsValid = true;
    let emailIsValid = true;
    let phoneNumberIsValid = true;
    let selectCountryIsValid = true;
    let checkboxIsChecked = true;
    let subjectIsValid = true;
    let textareaIsValid = true;
    let vrSizeIsChecked = true;

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

    if (selectCountry === 0) {
      selectCountryIsValid = false;
    } else if (selectCountry === 6) {
      alert('Go and raise your country from its knees, russian dog');
      location.reload();
    }

    if (!checkbox) {
      checkboxIsChecked = false;
    }

    if (vrSize === undefined) {
      vrSizeIsChecked = false;
    }

    if (!subject.trim().match(subjectRegExp)) {
      subjectIsValid = false;
    }

    if (!textarea.trim().match(textareaRegExp)) {
      textareaIsValid = false;
    }

    return [
      firstNameIsValid,
      lastNameIsValid,
      emailIsValid,
      phoneNumberIsValid,
      selectCountryIsValid,
      checkboxIsChecked,
      vrSizeIsChecked,
      subjectIsValid,
      textareaIsValid,
    ];
  }

  const [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    phoneNumberIsValid,
    selectCountryIsValid,
    checkboxIsChecked,
    vrSizeIsChecked,
    subjectIsValid,
    textareaIsValid,
  ] = formDataIsValid(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.phoneNumber,
    formData.selectCountry,
    formData.checkbox,
    formData.vrSize,
    formData.subject,
    formData.textarea
  );

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

  if (!selectCountryIsValid) {
    selectCountry.classList.remove('valid');
    selectCountry.classList.add('invalid');
    selectCountry.nextElementSibling.style.display = 'block';
  } else {
    selectCountry.classList.remove('invalid');
    selectCountry.classList.add('valid');
    selectCountry.nextElementSibling.style.display = 'none';
  }

  if (!checkboxIsChecked) {
    checkbox.nextElementSibling.style.display = 'block';
  } else {
    checkbox.nextElementSibling.style.display = 'none';
  }

  if (!vrSizeIsChecked) {
    vrSizeContainer.nextElementSibling.style.display = 'block';
  } else {
    vrSizeContainer.nextElementSibling.style.display = 'none';
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
    // Public access

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

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneNumberIsValid &&
    selectCountryIsValid &&
    checkboxIsChecked &&
    vrSizeIsChecked &&
    subjectIsValid &&
    textareaIsValid
  ) {
    delete formData.checkbox;
    formData.selectCountry = selectCountry[formData.selectCountry].textContent;
    sendFormUserData(formData);
  }
});
