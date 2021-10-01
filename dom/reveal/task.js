const blocks = document.querySelectorAll('.reveal');
function isVisibleElement(element) {
  const viewportH = window.innerHeight;
  const elementInTop = element.getBoundingClientRect().top;
  return (elementInTop < viewportH) ? true : false;
}
document.addEventListener('scroll', getVisibleBlock);

function getVisibleBlock() {
  for (let i=0; i < blocks.length; i++) {
    if (isVisibleElement(blocks[i])) blocks[i].classList.add('reveal_active');
  }
}
