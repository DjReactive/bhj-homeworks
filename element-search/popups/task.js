const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
main.className += ' modal_active';

const [mainClose, successClose] = document.getElementsByClassName('modal__close_times');
mainClose.onclick = () => main.className = 'modal';
successClose.onclick = () => success.className = 'modal';

const [show] = document.getElementsByClassName('show-success');
show.onclick = () => success.className += ' modal_active';
