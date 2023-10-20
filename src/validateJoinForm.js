const joinForm = document.getElementById('mainForm');

const textRegExp = /^[a-zA-Z]{1,25}$/;
const subjectRegExp = /^[A-Za-z ]{1,25}$/;
const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
const phoneNumberRegExp = /\(\d{3}\) \d{3}-\d{4}/;
const textareaRegExp = /^[a-zA-Z]{1,5000}$/;

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

  // Function for mutating original formState errors

  function formDataIsValid() {
    const formData = {
      firstName: formState.firstName.node?.value,
      lastName: formState.lastName.node?.value,
      email: formState.email.node?.value,
      phoneNumber: formState.phoneNumber.node?.value,
      selectCountry: formState.selectCountry.node?.value,
      vrSize: formState.vrSize.node?.value,
      subject: formState.subject.node?.value,
      textarea: formState.textarea.node?.value,
      ageCheck: formState.ageCheck.node?.checked,
    };

    if (formData.firstName === '') {
      formState.firstName.error = 'This field must not be empty';
    } else if (!formData.firstName.trim().match(textRegExp)) {
      formState.firstName.error = 'Only latin characters. No more than 25 characters';
    } else {
      formState.firstName.error = '';
    }

    if (formData.lastName === '') {
      formState.lastName.error = 'This field must not be empty';
    } else if (!formData.lastName.trim().match(textRegExp)) {
      formState.lastName.error = 'Only latin characters. No more than 25 characters';
    } else {
      formState.lastName.error = '';
    }

    if (formData.email === '') {
      formState.email.error = 'This field must not be empty';
    } else if (!formData.email.trim().match(emailRegExp)) {
      formState.email.error = 'Please fill a correct email address format. for example: "admin@gmail.com"';
    } else {
      formState.email.error = '';
    }

    if (formData.phoneNumber === '') {
      formState.phoneNumber.error = 'This field must not be empty';
    } else if (!formData.phoneNumber.trim().match(phoneNumberRegExp)) {
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

    if (formData.vrSize === undefined) {
      formState.vrSize.error = 'You have to choose size';
    } else {
      formState.vrSize.error = '';
    }

    if (formData.subject === '') {
      formState.subject.error = 'This field must not be empty';
    } else if (!formData.subject.trim().match(subjectRegExp)) {
      formState.subject.error = 'Only latin characters';
    } else {
      formState.subject.error = '';
    }

    if (formData.textarea === '') {
      formState.textarea.error = 'This field must not be empty';
    } else if (!formData.textarea.trim().match(textareaRegExp)) {
      formState.textarea.error = 'Only latin characters, and also contain 5000 characters max';
    } else {
      formState.textarea.error = '';
    }

    console.log(formState.ageCheck);
    console.log(formData.ageCheck);
  }

  formDataIsValid();

  // Function for rendering errors when fields are wrong

  function formFieldsShowError() {
    for (const fieldName in formState) {
      const field = formState[fieldName];

      if (fieldName === 'rateUs') continue;

      if (field.node === null) {
        document.getElementById(`vrSizeError`).innerText = field.error;
      } else if (field.error !== '' && field.node !== null) {
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

  formFieldsShowError();

  // async function sendFormUserData(formUserData) {
  //   // Public access

  //   const url = 'https://hydra-vr-default-rtdb.firebaseio.com/';

  //   try {
  //     const response = await fetch(`${url}users.json`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formUserData),
  //     });

  //     if (!response.ok) throw new Error(`HTTP error. Status: ${response.status}`);

  //     const data = await response.json();
  //     alert(`Succeed! Your form data has been sent. id: ${data}`);
  //     console.log('Succeed ', data);
  //   } catch (err) {
  //     alert(`unsuccessful! Try again Error: ${err}`);
  //     console.error('unsuccessful ', err);
  //   }
  // }

  // if (
  //   firstNameIsValid &&
  //   lastNameIsValid &&
  //   emailIsValid &&
  //   phoneNumberIsValid &&
  //   selectCountryIsValid &&
  //   checkboxIsChecked &&
  //   vrSizeIsChecked &&
  //   subjectIsValid &&
  //   textareaIsValid
  // ) {
  //   formData.selectCountry = selectCountry[formData.selectCountry].textContent;
  //   sendFormUserData(formData);
  // }
});
