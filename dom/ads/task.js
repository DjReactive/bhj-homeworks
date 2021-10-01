const rotators = document.getElementsByClassName('rotator');
let curID, nextElement = [];
for (let elements, cur, i=0; i < rotators.length; i++) {
  elements = rotators[i].getElementsByClassName('rotator__case');
  if (elements.length > 1) {
    nextElement[i] = 0;
    cur =  rotators[i].querySelector('.rotator__case_active');
    changeMessage(i, elements, cur, Number(cur.getAttribute('data-speed')));
  }
}

function changeMessage (rotatorIndex, elements, current, timer) {
  if (curID !== null) clearInterval(curID);

  let next = getNextElement(rotatorIndex, elements);
  curID = setInterval(() => {
    current.classList.remove('rotator__case_active');
    next.classList.add('rotator__case_active');
    let style = next.getAttribute('data-color');
    next.setAttribute('style', `color:${style}`)
    changeMessage(rotatorIndex, elements, next, Number(next.getAttribute('data-speed')));
  }, timer)
}

/* index - id в массиве среди всех ротаторов, rotator - сам ротатор */
function getNextElement (rotatorIndex, elements) {
  if (elements.length - 1 <= nextElement[rotatorIndex]) nextElement[rotatorIndex] = 0;
  else nextElement[rotatorIndex]++;
  return elements[nextElement[rotatorIndex]];
}
