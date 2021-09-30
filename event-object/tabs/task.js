const [navigation] = document.getElementsByClassName('tab__navigation');
const tabs = document.getElementsByClassName('tab__content');
const links = navigation.getElementsByClassName('tab');

for (let i=0; i < links.length; i++) {
  links[i].addEventListener('click', choosenTab);
}

function choosenTab () {
  for (let i=0; i < links.length; i++) {
    if (this === links[i]) {
      links[i].classList.add('tab_active');
      tabs[i].classList.add('tab__content_active');
    } else {
      links[i].className = 'tab';
      tabs[i].className = 'tab__content';
    }
  }
}
