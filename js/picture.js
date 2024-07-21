// Получаем шаблон изображений других пользователей из разметки
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// Получаем контейнер из разметки в который будут добавляться изображения других пользователей
const container = document.querySelector('.pictures');

// Ф-я создает изображение других пользователей по шаблону
const createPicture = ({url, description, likes, comments}) => {
    // Клонируем шаблон изображений
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;

    return picture;
}

// Ф-я отрисовывает 
const renderPictures = (pictures) => {
    const fragment = document.createDocumentFragment();
    pictures.forEach((picture) => {
        const pictureElement = createPicture(picture);
        fragment.append(pictureElement);
    });

    container.append(fragment);

};

export { renderPictures };
