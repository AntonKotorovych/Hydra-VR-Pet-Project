const mainForm = document.querySelector('form[name="main-form"]');

const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const phoneNumber = document.querySelector('input[name="phone-number"]');
const subject = document.querySelector('input[name="subject"]');
const textarea = document.querySelector('textarea[name="textarea"]');
const submitBtn = document.querySelector('button[name="submit-btn"]');

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

  function validateFormData(firstName, lastName, email, phoneNumber, subject, textarea) {
    let nameIsValid = true;
    let lastNameIsValid = true;
    let emailIsValid = true;
    let phoneNumberIsValid = true;
    let subjectIsValid = true;
    let textareaIsValid = true;

    const textRegExp = /^[a-zA-Z]{1,25}$/;
    const emailRegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    const phoneNumberRegExp = /\(\d{3}\) \d{3}-\d{4}/;
    const textareaRegExp = /^[A-Za-z]{1,5000}$/;

    if (!firstName.trim().match(textRegExp)) {
      nameIsValid = false;
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

    if (!subject.trim().match(textRegExp)) {
      subjectIsValid = false;
    }

    if (!textarea.trim().match(textareaRegExp)) {
      textareaIsValid = false;
    }

    return [nameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid];
  }

  const [nameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid] = validateFormData(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.phoneNumber,
    formData.subject,
    formData.textarea
  );

  console.log(formData);

  console.log(nameIsValid, lastNameIsValid, emailIsValid, phoneNumberIsValid, subjectIsValid, textareaIsValid);
});
