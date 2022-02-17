function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const bodyRef = document.querySelector("body")
const buttonRef = document.querySelector(".change-color")
const textColor = document.querySelector(".color")

buttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyRef.style.backgroundColor;
});
