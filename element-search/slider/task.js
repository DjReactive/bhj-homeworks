const images = document.getElementsByClassName('slider__item');
let counter = 0;

const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');

nextButton.onclick = () => {
  if ((images.length - 1) <= counter) counter = 0;
  else counter++;

  setUnactiveAll();
  console.log(counter);
  images[counter].className += ' slider__item_active';
}

prevButton.onclick = () => {
  if (0 >= counter) counter = images.length - 1;
  else counter--;

  setUnactiveAll();
  images[counter].className += ' slider__item_active';
}

function setUnactiveAll () {
  for (let i=0; i < images.length; i++)
    images[i].classList.remove('slider__item_active');
}
