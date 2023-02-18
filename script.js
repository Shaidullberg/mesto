let popup = document.querySelector('.popup');
let closebtn = document.querySelector('.profile__edit-btn');
let exitpopup = document.querySelector('.popup__button-exit');

closebtn.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

exitpopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});