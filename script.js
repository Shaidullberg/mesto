// Реализация открытия и закрытия всплывающего окна
let popup = document.querySelector(".popup"); // переменная для попапа
let openpopup = document.querySelector(".profile__edit-btn"); // переменная для значка редактирования
let exitpopup = document.querySelector(".popup__button-exit"); // переменная для значка крестика

openpopup.addEventListener("click", function () {
  // если клик по значку редактирования, то добавляю класс
  popup.classList.add("popup_opened");
});

exitpopup.addEventListener("click", function () {
  // если клик по значку крестику, то удаляю класс
  popup.classList.remove("popup_opened");
  formname.value = currentName.textContent;
  formabout.value = currentAbout.textContent;
});

// Реализация автозаполнения полей содержимым текста на странице
let formname = document.querySelector(".popup__form-input_name"); // поле для ввода имени
let formabout = document.querySelector(".popup__form-input_about"); // поле для ввода информации о себе
let currentName = document.querySelector(".profile__title"); // тег с текстом для имени
let currentAbout = document.querySelector(".profile__subtitle"); // тег с текстом для информации о себе
// присваиваю значение содержимого текстовых элементов значениям полей
formname.value = currentName.textContent;
formabout.value = currentAbout.textContent;
// Проверка (правда не знаю зачем, на странице итак видно, но вроде так принято:)
console.log(formname.value);
console.log(formabout.value);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form");
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popup.classList.remove("popup_opened"); // удаляю класс при нажатии сохранить
  currentName.textContent = formname.value; // переношу данные из формы в тег
  currentAbout.textContent = formabout.value; // переношу данные из формы в тег
}

formElement.addEventListener("submit", handleFormSubmit); //отслеживаю отправку формы
