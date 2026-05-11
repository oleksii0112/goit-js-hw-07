const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")
input.addEventListener('input', event =>
{
    const name = input.value.trim();
    if (name === "") {
        span.textContent = "Anonymous"
    }
    else {
        span.textContent = name;
    }
}
)