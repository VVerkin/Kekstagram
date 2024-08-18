import { isEscapeKey } from './util.js';
// Получили форму загрузки изображения
const form = document.querySelector('.img-upload__form');
// Получили элемент открытия формы
const fileField = document.querySelector('#upload-file');
// Получили overlay
const overlay = document.querySelector('.img-upload__overlay');
// Получили body
const body = document.querySelector('body');
// Получили кнопку закрытия формы
const cancelButton = document.querySelector('#upload-cancel');

const showModal = () => {
  // удаляем класс hidden у элемента .img-upload__overlay
  overlay.classList.remove('hidden');
  // тегу body задаем класс modal-open
  body.classList.add('modal-open');
  // добавляем обработчик отслеживания нажатия клавиши Esc
  document.addEventListener('keydown', onEscKeyDown);
};

fileField.addEventListener('change', () => {
  showModal();
});

const hideModal = () => {
  // добавляем класс hidden у элемента .img-upload__overlay
  overlay.classList.add('hidden');
  // у тега body удаляем класс modal-open
  body.classList.remove('modal-open');
  // удаляем обработчик отслеживания нажатия клавиши Esc
  document.removeEventListener('keydown', onEscKeyDown);
  // сбросим значение поля #upload-file, для этого, можно сбросить всю форму .img-upload__form с помощью метода .reset()
  form.reset();
};

// Ф-я закрывает форму при нажатии Esc
function onEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideModal();
  }
}

cancelButton.addEventListener('click', () => {
  hideModal();
});