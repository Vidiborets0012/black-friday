const btn = document.querySelector('.menu-btn');

const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});


// Елементи
const selectButton = document.querySelector('.select-btn');
const dropdown = document.querySelector('.dropdown');
const phoneInput = document.querySelector('#phone');
const selectFlag = document.querySelector('.select-btn-img');
const items = document.querySelectorAll('.dropdown li');

// Початкове значення
phoneInput.placeholder = "+380";
selectFlag.src = "images/flag-ukraine.svg";
selectFlag.alt = "Ukraine";

// Показати/приховати список
selectButton.addEventListener('click', (event) => {
  event.preventDefault(); // Забороняємо стандартну поведінку
  event.stopPropagation(); // Зупиняємо поширення події
  const isOpen = dropdown.style.display === 'block';
  dropdown.style.display = isOpen ? 'none' : 'block';
  selectButton.classList.toggle('open', !isOpen);
});

// Вибір елемента зі списку
items.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); // Зупиняємо поширення події

    const selectedValue = item.dataset.value; // Код країни
    const selectedImg = item.dataset.img; // Шлях до зображення
    const selectedAlt = item.querySelector('img').alt; // Alt зображення

    // Оновлення кнопки
    phoneInput.placeholder = selectedValue;
    selectFlag.src = selectedImg;
    selectFlag.alt = selectedAlt;

    // Закриття списку
    dropdown.style.display = 'none';
    selectButton.classList.remove('open');
  });
});

// Закриття випадаючого списку при кліку поза селектом
document.addEventListener('click', () => {
  dropdown.style.display = 'none';
  selectButton.classList.remove('open');
});