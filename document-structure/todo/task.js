const button = document.querySelector('#tasks__add');
const input = document.querySelector('#task__input');
const list = document.querySelector('#tasks__list');
let idCounter = 1;
button.onclick = e => {
  const div = `
  <div class="task" id="task-${idCounter}">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove" onclick="removeTask('task-${idCounter}')">&times;</a>
  </div>`;
  list.insertAdjacentHTML("afterBegin", div);
  input.value = "";
  idCounter++;
  return false;
};

function removeTask(taskID) {
  document.querySelector(`#` + taskID).remove();
}
