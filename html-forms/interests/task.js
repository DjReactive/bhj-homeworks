const checkboxes = document.getElementsByClassName('interest__check');
Array.from(checkboxes).forEach(c => c.onchange = checkboxChange);

function checkboxChange() {
  let allOptions = document.querySelectorAll("li.interest");
  for (let tree, cbox, i=0; i < allOptions.length; i++) {
    tree = checkTree(allOptions[i]);
    if (tree !== null) {
      cbox = allOptions[i].querySelector('.interest__check');
      if (cbox === this) {
        let cboxes = allOptions[i].querySelectorAll('.interest__check');
        for (let n=0; n < cboxes.length; n++) cboxes[n].checked = this.checked;
        checkboxChange();
      }
      else setValueCheckbox(cbox, tree);
    }
  }
}

function checkTree(li) {
  let ul = li.querySelector('ul')
  if (ul !== null && ul.length !== 0) {
    let count = 0, cboxes = ul.getElementsByClassName('interest__check')
    for (let i=0; i < cboxes.length; i++) {
      if (cboxes[i].checked) count++;
    }
    if (count >= cboxes.length) return 1;
    if (count > 0) return 0;
    return -1;
  }
  return null; /* Если в контрукции li не обнаружено вложенных списков */
}

function setValueCheckbox(box, value) {
  switch (value) {
    case 1: /* все вложенные чекбоксы включены */
      box.checked = true; box.indeterminate = false; break;
    case 0: /* хотя бы один чекбокс включен */
      box.checked = false; box.indeterminate = true; break;
    default: /* ни один чекбокс не работает */
      box.checked = false; box.indeterminate = false;
  }
}
