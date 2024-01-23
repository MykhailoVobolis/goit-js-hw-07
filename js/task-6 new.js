function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Функція створення елементів <div>
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

// Додавання елементів <div> у контейнер при кліку на button Create
btnCreate.addEventListener('click', () => {
  // Перевірка наявності елементів у контейнері та їх відалення
  if (colorItemBox.childNodes.length !== 0) {
    const deletEl = document.querySelectorAll('.boxes-item');
    deletEl.forEach(element => {
      element.remove();
    });
  }
  //Первірка валідності введенного значення
  if (numInput.value >= 1 && numInput.value <= 100) {
    createBoxes();
    createBoxes(numInput.value);
  }
  // Очіщення поля вводу значень
  numInput.value = '';

  // Очіщення результату при кліку на button Destroy
  const deletEl = document.querySelectorAll('.boxes-item');

  btnDestroy.addEventListener('click', () => {
    deletEl.forEach(element => {
      element.remove();
    });
  });
});
