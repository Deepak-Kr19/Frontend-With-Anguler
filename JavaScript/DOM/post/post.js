let likeBtn = document.querySelector('#likebtn');
let dislikeBtn = document.querySelector('#dislikebtn');

let likeCount = 0;
let dislikeCount = 0;

function likePost() {
    likeCount++;
    likeBtn.innerText = `❤️ ${likeCount}`;
}

function dislikePost() {
    dislikeCount++;
    dislikeBtn.innerText = `👎 ${dislikeCount}`;
}