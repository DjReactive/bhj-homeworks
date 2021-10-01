const allSizes = document.getElementsByClassName('font-size');
const divFontColors = document.querySelector('.book__control_color')
const allFontColors = divFontColors.getElementsByClassName('color');
const divBgColors = document.querySelector('.book__control_background')
const allBgColors = divBgColors.getElementsByClassName('color');

/* Классы для задания */
const classSizes = [' book_fs-small', '', ' book_fs-big'];
const classFontColor = [' book_color-black', ' book_color-gray', ' book_color-whitesmoke'];
const classBgColor = ['book_bg-black', 'book_bg-gray', 'book_bg-white'];

const book = document.querySelector('#book');
Array.from(allSizes).forEach((temp) => temp.onclick = changeSize);
Array.from(allFontColors).forEach((temp) => temp.onclick = changeFontColor);
Array.from(allBgColors).forEach((temp) => temp.onclick = changeBgColor);

function changeSize() {
  for (let i=0; i < allSizes.length; i++) {
    if (this === allSizes[i]) {
      this.classList.add('font-size_active');
      book.className = `book${classSizes[i]}`;
    }
    else allSizes[i].classList.remove('font-size_active');
  }
  return false;
}

function changeFontColor() {
  for (let i=0; i < allFontColors.length; i++) {
    if (this === allFontColors[i]) {
      this.classList.add('color_active');
      book.style.color = `${allFontColors[i].dataset.textColor}`;
    }
    else allFontColors[i].classList.remove('color_active');
  }
  return false;
}

function changeBgColor() {
  for (let i=0; i < allBgColors.length; i++) {
    if (this === allBgColors[i]) {
      this.classList.add('color_active');
      book.style.background = `${allBgColors[i].dataset.bgColor}`;
    }
    else allBgColors[i].classList.remove('color_active');
  }
  return false;
}
