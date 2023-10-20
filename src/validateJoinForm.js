const joinForm = document.getElementById('mainForm');

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
    node: document.getElementById('country'),
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
  checkbox: {
    node: document.getElementById('ageCheck'),
    error: '',
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
    vrSize: formState.vrSize.node?.currentVrSize.id,
    subject: formState.subject.node?.value,
    textarea: formState.textarea.node?.value,
    rateUs: formState.rateUs.node?.value,
    checkbox: formState.checkbox.checked,
  };

  function formDataIsValid() {
    if (formData.firstName === '') {
      formState.firstName.error = 'This field must not be empty';
    } else if (!formData.firstName.trim().match(textRegExp)) {
      formState.firstName.error = 'Only characters. No more than 25 characters';
    }

    if (formData.lastName === '') {
      formState.lastName.error = 'This field must not be empty';
    } else if (!formData.lastName.trim().match(textRegExp)) {
      formState.lastName.error = 'Only characters. No more than 25 characters';
    }

    if (formData.email === '') {
      formState.email.error = 'This field must not be empty';
    } else if (!formData.email.trim().match(emailRegExp)) {
      formState.email.error = 'Please fill a correct email address format. for example: "admin@gmail.com"';
    }

    if (formData.phoneNumber === '') {
      formState.phoneNumber.error = 'This field must not be empty';
    } else if (!formData.phoneNumber.trim().match(phoneNumberRegExp)) {
      formState.phoneNumber.error = 'Enter your phone number in the format "(123) 456-7890"';
    }

    if (formData.selectCountry === 0) {
      formState.selectCountry.error = 'You have to select your country';
    } else if (selectCountry === 6) {
      formState.selectCountry.error = 'Go away from this site';
      alert('Go and raise your country from its knees, russian dog');
      location.reload();
    }

    if (!formData.checkbox) {
      formState.checkbox.error = 'You have to confirm that you are adult';
    }

    if (formData.vrSize === undefined) {
      formState.vrSize.error = 'You have to choose size';
    }

    if (formData.subject === '') {
      formState.subject.error = 'This field must not be empty';
    } else if (!formData.subject.trim().match(subjectRegExp)) {
      formState.subject.error = 'Only characters. No more than 25 characters';
    }

    if (formData.textarea === '') {
      formState.textarea.error = 'This field must not be empty';
    } else if (!formData.textarea.trim().match(textareaRegExp)) {
      formState.textarea.error = 'Textarea has not to be empty and also contain 5000 characters max';
    }
  }

  formDataIsValid();

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
