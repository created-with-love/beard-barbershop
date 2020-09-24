(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const body = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');

    body.classList.toggle('body-hidden');

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    handlerEscModalClose();
  });
})();

// Реализация закрытия модалки при клике в бекдроп
const menuBtnRef = document.querySelector('[data-menu-button]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

// Функция для закрытия модального окна при нажатии на Esc
function handlerEscModalClose() {
  window.addEventListener('keydown', onEsckeyClick);
  function onEsckeyClick(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }
}

// Функция закрытия модального окна и снятия всех классов
function onModalClose() {
  backdrop.classList.remove('is-open');
  menuBtnRef.classList.remove('is-open');
  body.classList.remove('body-hidden');
}

// реализация закрытия модального окна при клике по элементам навигации
const mainModalMenuListItems = document.querySelector('.nav-menu');
mainModalMenuListItems.addEventListener('click', onMainMenuItemsClick);

function onMainMenuItemsClick(evt) {
  if (!evt.target.classList.value === 'nav-menu__item') {
    return;
  }
  onModalClose();
}

const onlineBtn = document.querySelector('.contact-us__online');
onlineBtn.addEventListener('click', onOnlineBtnClick);
function onOnlineBtnClick(evt) {
  if (!evt.target.classList.value === 'contact-us__online') {
    return;
  }
  onModalClose();
}
