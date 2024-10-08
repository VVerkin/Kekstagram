import { showBigPicture } from './render-big-picture.js';

// Получаем шаблон изображений других пользователей из разметки
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// Получаем контейнер из разметки в который будут добавляться изображения других пользователей
const container = document.querySelector('.pictures');

// Ф-я создает изображение других пользователей по шаблону

const createPicture = (data) => {
    const { comments, description, likes, url } = data;
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;

    picture.addEventListener('click', () => {
        showBigPicture(data);
    });

    return picture;
};

const renderPictures = (pictures) => {
    const fragment = document.createDocumentFragment();
    pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
    });

    container.append(fragment);
};

export { renderPictures };