function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color")
const span = document.querySelector(".color")
const ptext = document.querySelector(".p-text")
btn.addEventListener("click", event => {
  const bckgColor = getRandomHexColor();
  document.body.style.background = bckgColor;
  span.textContent = bckgColor;
  ptext.style.color = "white"
  span.style.color = "white";
})