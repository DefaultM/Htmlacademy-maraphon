let like = document.querySelector('.like');
let likesNumber = document.querySelector('.like-count');
let counter = 0;

like.onclick = function () {
  // Добавьте код сюда
  ++counter;
  likesNumber.textContent = counter;
  like.classList.toggle('added');

};


let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-all');
let commentField = document.querySelector('.comment-field');

let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);


};

commentField.oninput = function () {


  if (commentField.value.length > 142) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};