const chatWidjet = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
chatWidjet.addEventListener('click', () => chatWidjet.classList.add('chat-widget_active'));
const messagesWidjet = document.querySelector( '.chat-widget__messages' );
const bot_messages = [
  'Доброго дня!',
  'Спасибо за обращение. Мы уже разбираемся с вашей проблемой',
  'Отлично. Чем-то еще помочь?',
  'Вопрос/сообщение не понятно, пожалуйста повторите.',
  'Мы вас услышали, скоро приступим к работе!',
  'Хорошо, будем работать.'
];
const bot_question = "У вас еще остались вопросы?";

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && (document.activeElement === input) && checkInput(input.value)) {
    writeMessage(input.value, true);
    setTimeout(() => {
      writeMessage(getRandomMessage());
    }, 500);
    input.value = "";
  }
});

function writeMessage (message, client = false) {
  // добавит
  messagesWidjet.innerHTML += `
    <div class="message` + getClientClass(client) + `">
      <div class="message__time">` + getCurrentTime() + `</div>
      <div class="message__text">
        ` + message + `
      </div>
    </div>
  `;
  scrollDown();
}

function checkInput(message) {
  let msg = message.trim();
  return msg.length < 1 ? false : true;
}

function getClientClass(client) {
  return client ? " message_client" : "";
}

function getCurrentTime() {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}

function getRandomMessage() {
  let random = getRandomInt(0, bot_messages.length - 1);
  return bot_messages[random];
}

function scrollDown() {
  let element = document.querySelector('.chat-widget__messages-container');
  console.log(element);
  element.scrollTop = element.scrollHeight;
}

/* функция рандома из интернета */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
