function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Функція створення нових елементів <div>
function createBoxes(amount) {
  let itemArray = [];
  let increaseValue = 30;
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.classList.add('boxes-item');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${increaseValue}px`;
    item.style.height = `${increaseValue}px`;
    itemArray.push(item);
    increaseValue += 10;
  }
  colorItemBox.append(...itemArray);
}

// Функція видалення створених елементів <div>
function deletNewElements() {
  colorItemBox.innerHTML = '';
}

const numInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const colorItemBox = document.querySelector('#boxes');

// Додавання елементів <div> у контейнер при кліку на button Create
btnCreate.addEventListener('click', () => {
  //Первірка валідності введенного значення
  if (numInput.value >= 1 && numInput.value <= 100) {
    // Перевірка наявності елементів у контейнері та, за наявності, їх відалення
    if (colorItemBox.childNodes.length !== 0) {
      deletNewElements();
    }
    createBoxes(numInput.value);
  }
  // Очіщення поля вводу значень
  numInput.value = '';
});

// Очіщення результату при кліку на button Destroy
btnDestroy.addEventListener('click', deletNewElements);
