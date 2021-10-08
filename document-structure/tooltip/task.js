/* Внес изменения в CSS, в класс tooltip -> position:absolute */
let curElement, curToolTip;
const links = document.getElementsByClassName('has-tooltip');
Array.from(links).forEach(a => {
  a.onclick = viewToolTip;
  a.style = "display:inline-block;";
});

function viewToolTip() {
  if (curToolTip !== undefined) curToolTip.remove();
  if (curElement !== this) {
    curElement = this;
    curToolTip = createToolTipElement(this);
    curToolTip.classList.add('tooltip_active');
  } else curElement = undefined;
  return false;
}

function createToolTipElement(el) {
  console.log(el.getAttribute("title"));
  const div = `<div class="tooltip">${el.getAttribute('title')}</div>`;
  el.insertAdjacentHTML("beforeEnd",div);
  return document.querySelector("div.tooltip");
}
