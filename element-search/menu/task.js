const allLinks = document.getElementsByClassName('menu__link');
const submenu = document.getElementsByClassName('menu_sub');

for (let i = 0; i < allLinks.length; i++) allLinks[i].onclick = checkLink;

function checkLink () {
  let element, link = this.closest(`a[href=""]`);
  if (link !== null) {
    for (let el, active, i=0; i < submenu.length; i++) {
      el = submenu[i];
      active = el.className.indexOf('menu_active');
      el.className = 'menu menu_sub';       // Всегда убираем активность субменю, а ниже уже выставляем для нужного
      if (this.parentElement === el.parentElement && active < 0)
        el.className += ' menu_active';
    }
    return false;
  }
}
