(() => {
let gameEnd, miss = 0, counter = 0;
gameEnd = false;
for (let i = 1; i < 10; i++) {
  element = getHole(i);
  element.onclick = () => checkHole(i);
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
};

function checkHole(index) {
  let element = getHole(index);
  if (gameEnd) return false;
  const elCount = document.getElementById('dead');
  const elMiss = document.getElementById('lost');
  if (element.className.includes('hole_has-mole')) {
    counter++;
    elCount.textContent = counter;
  } else {
    miss++;
    elMiss.textContent = miss;
  }

  if (counter >= 10) {
    alert ("Вы убили всех кротов!");
    elCount.textContent = `${counter} (Победа)`;
    gameEnd = true;
  }
  if (miss >= 5) {
    alert ("Вы проиграли!");
    elMiss.textContent = `${miss} (Проигрыш)`;
    gameEnd = true;
  }

  return true;
}
})();
