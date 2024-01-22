function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('button');
const backgroundColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

buttonChangeColor.addEventListener('click', () => {
  backgroundColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = backgroundColor.textContent;
});
