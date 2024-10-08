import { isEscapeKey } from './util.js';

// получаем большое изображение
const bigPicture =  document.querySelector('.big-picture');
// Получаем счетчик комментариев
const commentCount = document.querySelector('.social__comment-count');
// Получаем список комментариев
const commentList = document.querySelectorAll('.social__comments');
// Получаем кнопку загрузки новой порции комментариев
const commentsLoader = document.querySelector('.comments-loader');

const body = document.querySelector('body');
// Получаем кнопку для выхода из полноэранного просмотра изображения
const cancelButton = document.querySelector('.big-picture__cancel');

// Ф-я создания комментария
const createComment = ({ avatar, name, message }) => {
    const comment = document.createElement('li');
    comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
    comment.classList.add('social__comment');
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    return comment;
};

const renderComments = (comments) => {
    commentList.innerHTML = '';

const fragment = document.createDocumentFragment();

comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
});

    commentList.append(fragment);
};

const hideBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    // document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        hideBigPicture();
    }
}

const onCancelButtonClick = () => {
    hideBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
    bigPicture.querySelector('.big-picture__img img').src = url;
    bigPicture.querySelector('.big-picture__img img').alt = description;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    commentsLoader.classList.add('hidden');
    commentCount.classList.add('hidden');
    document.addEventListener('keydown', onEscKeyDown);

    renderPictureDetails(data);
    renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };



