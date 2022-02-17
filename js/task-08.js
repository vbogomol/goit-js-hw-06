const loginFormRef = document.querySelector("form.login-form");

loginFormRef.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please complete all the fields!");
}
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}