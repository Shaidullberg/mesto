// Реализация открытия и закрытия всплывающего окна
let popup = document.querySelector(".popup"); // переменная для попапа
let editBtn = document.querySelector(".profile__btn-edit"); // переменная для значка редактирования
let exitPopup = document.querySelector(".popup__button-exit"); // переменная для значка крестика
let formName = document.querySelector(".popup__item_el_name"); // поле для ввода имени
let formAbout = document.querySelector(".popup__item_el_about"); // поле для ввода информации о себе
let currentName = document.querySelector(".profile__title"); // тег с текстом для имени
let currentAbout = document.querySelector(".profile__subtitle"); // тег с текстом для информации о себе
let formElement = document.querySelector(".popup__form"); // Находим форму в DOM

// Открытие и закртыие попапа
editBtn.addEventListener("click", function () {
  // если клик по значку редактирования, то добавляю класс
  formName.value = currentName.textContent;
  formAbout.value = currentAbout.textContent;
  popup.classList.add("popup_opened"); // Добавляю класс
});

function closePopup() {
  popup.classList.remove("popup_opened"); // Объявляем функцию
}

exitPopup.addEventListener("click", closePopup); // Вызов функции closePopup

// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Сброс стандартной отправки формы
  closePopup(); // Вызов функции closePopup
  currentName.textContent = formName.value; // переношу данные из формы в тег
  currentAbout.textContent = formAbout.value; // переношу данные из формы в тег
}

formElement.addEventListener("submit", handleFormSubmit); //отслеживаю отправку формы
// Реализация открытия и закрытия всплывающего окна
let popup = document.querySelector(".popup"); // переменная для попапа
let editBtn = document.querySelector(".profile__btn-edit"); // переменная для значка редактирования
let exitPopup = document.querySelector(".popup__button-exit"); // переменная для значка крестика
let formName = document.querySelector(".popup__item_el_name"); // поле для ввода имени
let formAbout = document.querySelector(".popup__item_el_about"); // поле для ввода информации о себе
let currentName = document.querySelector(".profile__title"); // тег с текстом для имени
let currentAbout = document.querySelector(".profile__subtitle"); // тег с текстом для информации о себе
let formElement = document.querySelector(".popup__form"); // Находим форму в DOM

// Массив c данными для карточке карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// Открытие и закртыие попапа
editBtn.addEventListener("click", function () {
  // если клик по значку редактирования, то добавляю класс
  formName.value = currentName.textContent;
  formAbout.value = currentAbout.textContent;
  popup.classList.add("popup_opened"); // Добавляю класс
});

function closePopup() {
  popup.classList.remove("popup_opened"); // Объявляем функцию
}

exitPopup.addEventListener("click", closePopup); // Вызов функции closePopup

// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Сброс стандартной отправки формы
  closePopup(); // Вызов функции closePopup
  currentName.textContent = formName.value; // переношу данные из формы в тег
  currentAbout.textContent = formAbout.value; // переношу данные из формы в тег
}

formElement.addEventListener("submit", handleFormSubmit); //отслеживаю отправку формы
