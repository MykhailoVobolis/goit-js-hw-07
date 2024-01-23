function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let increaseValue = 30;
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.classList.add('boxes-item');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${increaseValue}px`;
    item.style.height = `${increaseValue}px`;
    colorItemBox.append(item);
    increaseValue += 10;
  }
}

const numInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const colorItemBox = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  //   if (colorItemBox.children.classList.contains('boxes-item') === true) {
  //     console.log('hello!');
  //   }

  //   colorItemBox.childNodes.remove();

  if (numInput.value >= 1 && numInput.value <= 100) {
    createBoxes();
    createBoxes(numInput.value);
  }
  numInput.value = '';

  const deletEl = document.querySelectorAll('.boxes-item');
  //   console.log(deletEl);

  btnDestroy.addEventListener('click', () => {
    deletEl.forEach(element => {
      element.remove();
    });
  });
});
