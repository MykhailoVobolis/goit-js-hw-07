function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('button');
const backgroundColorTitle = document.querySelector('.color');
const bodyColor = document.querySelector('body');

buttonChangeColor.addEventListener('click', () => {
  backgroundColorTitle.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = backgroundColorTitle.textContent;
});
