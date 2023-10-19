const joinForm = document.getElementById('mainForm');

const errorTextEmptyField = 'This field must be filled';

const formState = {
  firstName: {
    node: document.getElementById('firstName'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Only characters. No more than 25 characters',
    },
  },
  lastName: {
    node: document.getElementById('lastName'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Only characters. No more than 25 characters',
    },
  },
  email: {
    node: document.getElementById('email'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Please fill a correct email address format. for example: "admin@gmail.com"',
    },
  },
  phoneNumber: {
    node: document.getElementById('phoneNumber'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Enter your phone number in the format "(123) 456-7890"',
    },
  },
  selectCountry: {
    node: document.getElementById('country'),
    error: {
      emptyField: 'You have to select your country',
    },
  },
  vrSizeContainer: {
    node: document.querySelector('.radio-buttons'),
  },
  vrSize: {
    node: document.querySelector('input[name="vrSize"]:checked'),
    error: {
      emptyField: 'You have to choose size',
    },
  },
  subject: {
    node: document.getElementById('subject'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Only characters. No more than 25 characters',
    },
  },
  textarea: {
    node: document.getElementById('textarea'),
    error: {
      emptyField: errorTextEmptyField,
      incorrectField: 'Textarea has not to be empty and also contain 5000 characters max',
    },
  },
  rateUs: {
    node: document.getElementById('ratingRange'),
  },
  checkbox: {
    node: document.getElementById('ageCheck'),
    error: {
      emptyField: 'You have to confirm that you are adult',
    },
  },
};

const submitBtn = document.getElementById('submitBtn');

const textRegExp = /^[a-zA-Z]{1,25}$/;
const subjectRegExp = /^[A-Za-z ]{1,25}$/;
const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
const phoneNumberRegExp = /\(\d{3}\) \d{3}-\d{4}/;
const textareaRegExp = /^[\s\S]{1,5000}$/;

joinForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    firstName: formState.firstName.node?.value,
    lastName: formState.lastName.node?.value,
    email: formState.email.node?.value,
    phoneNumber: formState.phoneNumber.node?.value,
    selectCountry: +formState.selectCountry.node?.value,
    checkbox: formState.checkbox.checked,
    vrSize: formState.vrSize.node?.currentVrSize.id,
    subject: formState.subject.node?.value,
    textarea: formState.textarea.node?.value,
    rateUs: formState.rateUs.node?.value,
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
