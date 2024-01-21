const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = registerForm.elements.email.value.trim();
  const password = registerForm.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const userRegistrationData = {};
    userRegistrationData.email = email;
    userRegistrationData.password = password;
    console.log(userRegistrationData);
  }
  form.reset();
});
