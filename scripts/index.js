const popupProfile = document.querySelector(".popup_edit-profile");
const popupCard = document.querySelector(".popup_add-card");
const editBtn = document.querySelector(".profile__btn-edit"); // переменная для кнопки редактирования профиля
const addBtn = document.querySelector(".profile__btn-add"); // переменная для кнопки добавления карточек
const exitPopup = document.querySelector(".popup__button-exit"); // переменная для кнопки закрытия попапа
const formName = document.querySelector(".popup__item_el_name"); // поле для ввода имени
const formAbout = document.querySelector(".popup__item_el_about"); // поле для ввода информации о себе
const cardToAddName = document.querySelector(".popup__item_add-placename"); // поле для ввода имени
const cardToAddUrl = document.querySelector(".popup__item_add-link"); // поле для ввода информации о себе
const currentName = document.querySelector(".profile__title"); // тег с текстом для имени
const currentAbout = document.querySelector(".profile__subtitle"); // тег с текстом для информации о себе
const formElement = document.querySelector(".popup__form"); // Находим форму в DOM
const imagePopup = document.querySelector('.popup_image_container')

// Из массива беру данные для карточек
const cards = [
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

cards.forEach((card) => {
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
  cardClone.querySelector('.card__btn-like').addEventListener('click', (e) => {
    e.target.classList.toggle('card__btn-like_active')
  })
  
  cardClone.querySelector('.card__btn-delete').addEventListener('click', (e) => {
    e.target.parentElement.remove()
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

const popups = document.querySelectorAll('.popup')


function handleEditFormSubmit(evt) {
  evt.preventDefault(); // Сброс стандартной отправки формы
  const currentPopup = Array.from(popups).find(popup => popup.classList.contains('popup_opened'))
  closePopup(currentPopup); // Вызов функции closePopup
  
  currentName.textContent = formName.value; // переношу данные из формы в тег
  currentAbout.textContent = formAbout.value; // переношу данные из формы в тег
}
function handleAddFormSubmit(evt) {
  evt.preventDefault(); 
  
  const cardToAdd = template.content.cloneNode(true)
  const cardImg = cardToAdd.querySelector(".card__image");
  const cardTitle = cardToAdd.querySelector(".card__title");
  
  cardImg.src = cardToAddUrl.value;
  cardImg.alt = cardToAddName.value;
  cardTitle.textContent = cardToAddName.value;
  cardImg.addEventListener('click', (e) => {
    imagePopup.querySelector('.popup_image').src = e.target.src;
    openPopup(imagePopup)
  })
  cardToAdd.querySelector('.card__btn-like').addEventListener('click', (e) => {
    e.target.classList.toggle('card__btn-like_active')
  })
  cardToAdd.querySelector('.card__btn-delete').addEventListener('click', (e) => {
    e.target.parentElement.remove()
  })

  cardsContainer.prepend(cardToAdd)
  const currentPopup = Array.from(popups).find(popup => popup.classList.contains('popup_opened'))
  closePopup(currentPopup); // Вызов функции closePopup
}

popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__button-exit') 
  
  closeButton.addEventListener('click', () => {
    closePopup(popup)
  })
  
  const form = popup.querySelector('form');
  const hasForm = !!form;
  if (hasForm) {
    const isEditForm = form.name !== 'popup-form-add-card'

    form.addEventListener("submit", isEditForm ? handleEditFormSubmit : handleAddFormSubmit); //отслеживаю отправку формы
  } 
})