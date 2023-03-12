//Переменные для редактирования профиля
const btnEditProfile = document.querySelector(".profile__btn-edit");
const popupProfile = document.querySelector(".popup_edit-profile");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupValueName = document.querySelector(".popup__item_el_name");
const popupValueAbout = document.querySelector(".popup__item_el_about");
//Переменные для добавления карточек
const popupAddCard = document.querySelector(".popup_add-card");
const formProfile = document.querySelector(".popup__form[name = 'popup-form-edit-profile']");
const formAddCard = document.querySelector(".popup__form[name = 'popup-form-add-card']");
const cardContainer = document.querySelector(".cards");
const btnAddCard = document.querySelector(".profile__btn-add");
const popupValuePlacename = document.querySelector(".popup__item_add-placename");
const popupValueLink = document.querySelector(".popup__item_add-link");
//общие переменные
const btnClosePopup = document.querySelectorAll(".popup__button-exit");
const template = document.querySelector("#template");
const popupImageCard = document.querySelector(".popup_viewing");
const popupImage = popupImageCard.querySelector(".popup__image");
const popupCaption = popupImageCard.querySelector(".popup__caption");

const cards = [
  {
    name: "День дедлайна",
    link: "https://chpic.su/_data/stickers/u/u_montora/u_montora_032.webp",
  },
  {
    name: "Дебаггинг",
    link: "https://s01.yapfiles.ru/files/257673/uborshikvmagazine.gif",
  },
  {
    name: "Просмотр ревью",
    link: "https://avatars.mds.yandex.net/get-images-cbir/8294717/lOoOgYsFiBU0oVmgXedyWQ270/ocr",
  },
  {
    name: "Кодинг",
    link: "https://static.wixstatic.com/media/f5df74_7771c729b02a4392811e0f9fff96f578~mv2.gif",
  },
  {
    name: "Непонимание",
    link: "https://sun9-53.userapi.com/impg/YcmYym2y7QMq3qWI12PwriR6xZ2F5CXsAAyBZQ/brEttOKq2EA.jpg?size=604x452&quality=95&sign=cb4df0f8a267fdf4512404d20980caea&type=album",
  },
  {
    name: "Чтение ТЗ",
    link: "https://i.imgflip.com/1v26hz.jpg",
  },
];

// Функция создания новой карточки
function createCard(card) {
  const newCard = template.content.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  const cardImage = newCard.querySelector(".card__image");
  cardTitle.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  const btnDeleteCard = newCard.querySelector(".card__btn-delete");
  btnDeleteCard.addEventListener("click", handleBtnDeleteCard);
  const btnPutLike = newCard.querySelector(".card__btn-like");
  btnPutLike.addEventListener("click", toggleLike);
  cardImage.addEventListener("click", function () {
    popupImage.setAttribute("src", card.link);
    popupImage.setAttribute("alt", card.name);
    popupCaption.textContent = card.name;
    openPopup(popupImageCard);
  });

  return newCard;
}

function addCard() {
  const cardTitle = popupValuePlacename.value;
  const cardLink = popupValueLink.value;
  const newCard = {
    name: cardTitle,
    link: cardLink,
  };
  const newCards = [newCard, ...cards.slice()];
  const cardElement = createCard(newCard);
  cardContainer.prepend(cardElement);
}

cards.slice().forEach(function (card) {
  const cardElement = createCard(card);
  cardContainer.prepend(cardElement);
});

//Функция удаления карточек
function handleBtnDeleteCard(event) {
  const btnDelete = event.target;
  const card = btnDelete.closest(".card");
  card.remove();
}

// Функция переключения класса лайка
function toggleLike(event) {
  const putLike = event.target;
  putLike.classList.toggle("card__btn-like_active");
}

btnEditProfile.addEventListener("click", function () {
  popupValueName.value = profileTitle.textContent;
  popupValueAbout.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});

btnClosePopup.forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

btnAddCard.addEventListener("click", function () {
  popupValueLink.value = "";
  popupValuePlacename.value = "";
  openPopup(popupAddCard);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupValueName.value;
  profileSubtitle.textContent = popupValueAbout.value;
  closePopup(popupProfile);
});

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addCard();
  closePopup(popupAddCard);
});
