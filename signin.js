const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

let dataArr = JSON.parse(localStorage.getItem('acc-data')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const errors = validateInputs();

  if (errors.length > 0) {
    errors.forEach(error => {
      const inputField = error.input;
      const errorMessage = error.message;
      setError(inputField, errorMessage);
    });
    return;
  }

  var found = false;
  dataArr.map(function(ele) {
    if (ele.email === emailValue && ele.password1 === passwordValue) {
      found = true;
      return false;
    }
  });
  if (found) {
    alert('Sign in Successful');
    window.location.href = "index.html";
    email.value = '';
    password.value = '';
  } else {
    setError(email, 'Incorrect email or password');
    setError(password, 'Incorrect email or password');
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const errors = [];

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '') {
    errors.push({ input: email, message: 'Email is required' });
  } else if (!isValidEmail(emailValue)) {
    errors.push({ input: email, message: 'Provide a valid email address' });
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    errors.push({ input: password, message: 'Password is required' });
  } else {
    setSuccess(password);
  }

  return errors;
};
