import { createUser } from './fetchForm.js';

const joinForm = document.getElementById('joinForm');

const textRegExp = /^[a-zA-Z]{1,25}$/;
const subjectRegExp = /^[A-Za-z ]{1,25}$/;
const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
const phoneNumberRegExp = /\(\d{3}\) \d{3}-\d{4}/;
const textareaRegExp = /^[a-zA-Z]{1,5000}$/;

function showFieldsErrors(obj) {
  for (const fieldName in obj) {
    const field = obj[fieldName];

    if (fieldName === 'rateUs') continue;

    if (field.error !== '') {
      field.node.classList.remove('valid');
      field.node.classList.add('invalid');
      document.getElementById(`${fieldName}Error`).innerText = field.error;
    } else if (field.error === '') {
      field.node.classList.remove('invalid');
      field.node.classList.add('valid');
      document.getElementById(`${fieldName}Error`).innerText = '';
    }
  }
}

joinForm.addEventListener('submit', event => {
  event.preventDefault();

  const formState = {
    firstName: {
      node: document.getElementById('firstName'),
      error: '',
    },
    lastName: {
      node: document.getElementById('lastName'),
      error: '',
    },
    email: {
      node: document.getElementById('email'),
      error: '',
    },
    phoneNumber: {
      node: document.getElementById('phoneNumber'),
      error: '',
    },
    selectCountry: {
      node: document.getElementById('selectCountry'),
      error: '',
    },
    vrSize: {
      node: document.querySelector('input[name="vrSize"]:checked'),
      error: '',
    },
    subject: {
      node: document.getElementById('subject'),
      error: '',
    },
    textarea: {
      node: document.getElementById('textarea'),
      error: '',
    },
    rateUs: {
      node: document.getElementById('ratingRange'),
    },
    ageCheck: {
      node: document.getElementById('ageCheck'),
      error: '',
    },
  };

  // Function for mutate original formState errors

  function getIsFormValid() {
    const formData = {
      firstName: formState.firstName.node?.value.trim(),
      lastName: formState.lastName.node?.value.trim(),
      email: formState.email.node?.value.trim(),
      phoneNumber: formState.phoneNumber.node?.value.trim(),
      selectCountry: formState.selectCountry.node?.value,
      vrSize: formState.vrSize.node?.value,
      subject: formState.subject.node?.value.trim(),
      textarea: formState.textarea.node?.value.trim(),
      ageCheck: formState.ageCheck.node?.checked,
    };

    if (formData.firstName === '') {
      formState.firstName.error = 'This field must not be empty';
    } else if (!formData.firstName.match(textRegExp)) {
      formState.firstName.error = 'Only latin characters. No more than 25 characters';
    } else {
      formState.firstName.error = '';
    }

    if (formData.lastName === '') {
      formState.lastName.error = 'This field must not be empty';
    } else if (!formData.lastName.match(textRegExp)) {
      formState.lastName.error = 'Only latin characters. No more than 25 characters';
    } else {
      formState.lastName.error = '';
    }

    if (formData.email === '') {
      formState.email.error = 'This field must not be empty';
    } else if (!formData.email.match(emailRegExp)) {
      formState.email.error = 'Please fill a correct email address format. for example: "admin@gmail.com"';
    } else {
      formState.email.error = '';
    }

    if (formData.phoneNumber === '') {
      formState.phoneNumber.error = 'This field must not be empty';
    } else if (!formData.phoneNumber.match(phoneNumberRegExp)) {
      formState.phoneNumber.error = 'Enter your phone number in the format "(123) 456-7890"';
    } else {
      formState.phoneNumber.error = '';
    }

    if (formData.selectCountry === '0') {
      formState.selectCountry.error = 'You have to select your country';
    } else if (formData.selectCountry === 'mordor') {
      formState.selectCountry.error = 'Go away from this site';
      alert('Go and raise your country from its knees, russian dog');
      location.reload();
    } else {
      formState.selectCountry.error = '';
    }

    if (!formData.ageCheck) {
      formState.ageCheck.error = 'You have to confirm that you are adult';
    } else {
      formState.ageCheck.error = '';
    }

    if (!formData.vrSize) {
      formState.vrSize.error = 'You have to choose size';
    } else {
      formState.vrSize.error = '';
    }

    if (formData.subject === '') {
      formState.subject.error = 'This field must not be empty';
    } else if (!formData.subject.match(subjectRegExp)) {
      formState.subject.error = 'Only latin characters';
    } else {
      formState.subject.error = '';
    }

    if (formData.textarea === '') {
      formState.textarea.error = 'This field must not be empty';
    } else if (!formData.textarea.match(textareaRegExp)) {
      formState.textarea.error = 'Only latin characters, and also contain 5000 characters max';
    } else {
      formState.textarea.error = '';
    }

    let formIsValid = true;

    for (const inputIsValid in formState) {
      if (inputIsValid === 'rateUs') continue;

      if (formState[inputIsValid].error !== '') {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      return true;
    } else {
      return false;
    }
  }

  const formIsValid = getIsFormValid();
  showFieldsErrors(formState);

  // Tracking inputs value changing

  joinForm.addEventListener('input', () => {
    getIsFormValid();
    showFieldsErrors(formState);
  });

  // Send Form to Firebase

  function createUserValues() {
    let userObj = {};

    for (const input in formState) {
      const inputValue = formState[input].node.value;
      userObj[input] = inputValue;
    }
    return userObj;
  }

  if (formIsValid) {
    const validFormData = createUserValues();
    createUser(validFormData);
  }
});
