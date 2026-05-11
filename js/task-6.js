function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes")
const dstrBtn = document.querySelector("[data-destroy]")
const crtBtn = document.querySelector("[data-create]")
const input = document.querySelector("#controls input")

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  boxes.innerHTML = ""
  let size = 30
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);
    size += 10;
  }
  boxes.append(fragment);
}

  crtBtn.addEventListener("click", event => {
    const value = Number(input.value)
    if (value < 1 || value > 100 || !value) {
      input.value = ""
      return;
    } 
    createBoxes(value);
    input.value = "";
  }
)   

dstrBtn.addEventListener("click", destroyBoxes);