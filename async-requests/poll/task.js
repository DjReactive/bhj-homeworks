const divPoll = document.querySelector("#poll__title");
const divAnswers = document.querySelector("#poll__answers");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('loadend', () => getThePoll());
xhr.send();

function getThePoll() {
  let response = JSON.parse(xhr.response);
  divPoll.textContent = response.data.title;
  Array.from(response.data.answers).forEach(a =>
    divAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer" onclick="addVote()">${a}</button> `));
}

function addVote() {
  alert('Ваш голос был учтен, спасибо!');
  window.location.reload();
}
