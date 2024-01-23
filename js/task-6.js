function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const colorItemBox = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  if (numInput.value >= 1 && numInput.value <= 100) {
    function createBoxes(amount) {
      let increaseValue = 30;
      for (let i = 0; i < amount; i++) {
        const item = document.createElement('div');
        item.classList.add('boxesitem');
        item.style.backgroundColor = getRandomHexColor();
        item.style.width = `${increaseValue}px`;
        item.style.height = `${increaseValue}px`;
        colorItemBox.append(item);
        increaseValue += 10;
      }
    }
    createBoxes(numInput.value);
  }
  numInput.value = '';
});

// скрипт удаления элементов div / почему то не работает
// const deletEl = document.querySelectorAll('.boxesitem');
// btnDestroy.addEventListener('click', () => {
//   deletEl.remove();
// });
