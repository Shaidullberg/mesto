const popupProfile = document.querySelector(".popup_edit-profile");
const popupCard = document.querySelector(".popup_add-card");
const editBtn = document.querySelector(".profile__btn-edit"); // переменная для кнопки редактирования профиля
const addBtn = document.querySelector(".profile__btn-add"); // переменная для кнопки добавления карточек
const exitPopup = document.querySelector(".popup__button-exit"); // переменная для кнопки закрытия попапа
const formName = document.querySelector(".popup__item_el_name"); // поле для ввода имени
const formAbout = document.querySelector(".popup__item_el_about"); // поле для ввода информации о себе
const currentName = document.querySelector(".profile__title"); // тег с текстом для имени
const currentAbout = document.querySelector(".profile__subtitle"); // тег с текстом для информации о себе
const formElement = document.querySelector(".popup__form"); // Находим форму в DOM
const imagePopup = document.querySelector('.popup_image_container')

// Из массива беру данные для карточек
const initialCards = [
  {
    name: 'Пермь',
    link: '../img/perm.png'
  },
  {
    name: 'Челябинск',
    link: '../img/chelyabinsk.png'
  },
  {
    name: 'Норильск',
    link: '../img/norilsk.png'
  },
  {
    name: 'Омск',
    link: '../img/omsk.png'
  },
  {
    name: 'Саратов',
    link: '../img/saratov.png'
  },
  {
    name: 'Волгоград',
    link: '../img/volgograd.png'
  }
];

// Добавление карточек из массива
template = document.getElementById("template");
cardsContainer = document.querySelector(".cards")

initialCards.forEach((card) => {
  const cardClone = template.content.cloneNode(true);
  const cardImg = cardClone.querySelector(".card__image");
  const cardTitle = cardClone.querySelector(".card__title");
  
  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardTitle.textContent = card.name;
  
  cardImg.addEventListener('click', (e) => {
    imagePopup.querySelector('.popup_image').src = e.target.src;
    openPopup(imagePopup)
  })
  cardsContainer.appendChild(cardClone)
})


// Функция открытия попапа:
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие попапа:
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


// // Открытие и закртие попапа редактировния профиля
editBtn.addEventListener('click', () => {
  // если клик по значку редактирования, то добавляю класс
  formName.value = currentName.textContent;
  formAbout.value = currentAbout.textContent;
  openPopup(popupProfile);
});

addBtn.addEventListener('click', function() {
  openPopup(popupCard);
})


// exitPopup.addEventListener("click", function(){
//   closePopup(popup);
// }); // Вызов функции closePopup

// // Функция поведения кнопки сохранить для попапа редактирования профиля
// function handleFormSubmit(evt) {
//   evt.preventDefault(); // Сброс стандартной отправки формы
//   closePopup(popup); // Вызов функции closePopup
//   currentName.textContent = formName.value; // переношу данные из формы в тег
//   currentAbout.textContent = formAbout.value; // переношу данные из формы в тег
// }

// formElement.addEventListener("submit", handleFormSubmit); //отслеживаю отправку формы
const popups = document.querySelectorAll('.popup')
console.log(popups)
popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__button-exit') 

  closeButton.addEventListener('click', (e) => {
    closePopup(popup)
  })
})