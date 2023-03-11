//Переменные для редактирования профиля
const btnEditProfile = document.querySelector(".profile__btn-edit");
const popupProfile = document.querySelector(".popup_edit-profile");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupValueName = document.querySelector(".popup__item_el_name");
const popupValueAbout = document.querySelector(".popup__item_el_about");
const popupProfileBtnSave = document.querySelector(".popup__button-save_profile");
//Переменные для добавления карточек
const popupAddCard = document.querySelector(".popup_add-card");
const popupAddCardSave = document.querySelector(".popup__button-save_card");
const formProfile = document.querySelector(".popup__form[name = 'popup-form-edit-profile']");
const formAddCard = document.querySelector(".popup__form[name = 'popup-form-add-card']");
const cardContainer = document.querySelector(".cards");
const btnAddCard = document.querySelector(".profile__btn-add");
const popupValuePlacename = document.querySelector('.popup__item_add-placename');
const popupValueLink = document.querySelector('.popup__item_add-link');
//общие переменные
const btnClosePopup = document.querySelectorAll(".popup__button-exit");

const cards = [
  {
    name: "Пермь",
    link: "img/perm.png",
  },
  {
    name: "Челябинск",
    link: "img/chelyabinsk.png",
  },
  {
    name: "Омск",
    link: "img/omsk.png",
  },
  {
    name: "Саратов",
    link: "img/saratov.png",
  },
  {
    name: "Волгоград",
    link: "img/volgograd.png",
  },
  {
    name: "Норильск",
    link: "img/norilsk.png",
  },
];

function createCard(card) {
  const newCard = document.querySelector("#template").content.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  const cardImage = newCard.querySelector(".card__image");
  cardTitle.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  const btnDeleteCard = newCard.querySelector(".card__btn-delete");
  btnDeleteCard.addEventListener('click', handleBtnDeleteCard);
  const btnPutLike = newCard.querySelector(".card__btn-like");
  btnPutLike.addEventListener('click', handlebtnPutLike);

  cardImage.addEventListener('click', function() {
    const popupImageCard = document.querySelector('.popup_viewing')
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption')
    popupImage.setAttribute('src', card.link);
    popupCaption.textContent = card.name;
    openPopup(popupImageCard);
  })



  cardContainer.prepend(newCard);

}

cards.forEach(createCard);

//Функция удаления карточек
function handleBtnDeleteCard(event) {
  const btnDelete = event.target;
  const card =  btnDelete.closest('.card')
  card.remove();
}

function handlebtnPutLike(event) {
  const putLike = event.target;
  putLike.classList.toggle('card__btn-like_active');
}

btnEditProfile.addEventListener('click', function () {
  popupValueName.value = profileTitle.textContent;
  popupValueAbout.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});

btnClosePopup.forEach(function (button) {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup))
})

btnAddCard.addEventListener('click', function () {
  popupValueLink.value = '';
  popupValuePlacename.value = '';
  openPopup(popupAddCard);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupProfileBtnSave.addEventListener('click', function () {
  profileTitle.textContent = popupValueName.value;
  profileSubtitle.textContent = popupValueAbout.value;
  closePopup(popupProfile);
});

function addCard() {
  const cardTitle = popupValuePlacename.value;
  const cardLink = popupValueLink.value;
  const newCard = {
    name: cardTitle,
    link: cardLink
  };
  cards.unshift(newCard);
  createCard(newCard);
}

popupAddCardSave.addEventListener('click', function() {
  addCard()
  closePopup(popupAddCard);
})

function handleFormSubmit(evt) {
  evt.preventDefault();
}

formProfile.addEventListener('submit', handleFormSubmit);

formAddCard.addEventListener('submit', handleFormSubmit);