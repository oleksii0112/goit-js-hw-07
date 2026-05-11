const form = document.querySelector(".login-form")

form.addEventListener("submit", event => {
    event.preventDefault();
    const { email, password } = form.elements
    const emailValid = email.value.trim()
    const passwordValid = password.value.trim()
    if (emailValid === "" || passwordValid === "") {
        alert("All form fields must be filled in");
        return;
    }
    const dataObj = {
        email: emailValid,
        password: passwordValid
    }
    console.log(dataObj);
    form.reset();
})