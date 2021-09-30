const [divContent] = document.getElementsByClassName('dropdown__value');
const [dropdown] = document.getElementsByClassName('dropdown__list');
const links = dropdown.getElementsByClassName('dropdown__link');

divContent.onclick = () => toggleDropDown();

for (let i=0; i < links.length; i++) {
  links[i].onclick = choosenOption;
}

function toggleDropDown () {
  dropdown.classList.toggle('dropdown__list_active');
}

function choosenOption () {
  divContent.textContent = this.textContent;
  toggleDropDown();
  return false;
}
