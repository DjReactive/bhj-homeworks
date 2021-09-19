function  start1() {
  let timer = document.getElementById('timer');
  let tId, count = Number(timer.textContent);

  tId = setInterval(() => {
    count--;
    timer.textContent = count;
    if (count === 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(tId);
    }
  }, 1000);
}
// start1();

// №1 повышенной сложности
function  start2() {
  let tId, timer = document.getElementById('timer');

  tId = setInterval(() => {
    if (!getTimerDecrement(timer)) {
      alert("Вы победили в конкурсе!");
      clearInterval(tId);
    }
  }, 1000);
}
function getNumberFix(number) {
   if (number < 10) return "0" + number;
   return String(number);
}
function getTimerDecrement(element) {
  let h, m, s, arr = element.textContent.split(":");
  h = Number(arr[0]); m = Number(arr[1]); s = Number(arr[2]);
  if (s === 0) {
    if (m === 0) {
      if (h === 0) {
        return false;
      } else h--, m = 59, s = 59;
    } else m--, s = 59;
  } else s--;
  timerArr = [getNumberFix(h), getNumberFix(m), getNumberFix(s)];
  element.textContent = timerArr.join(":");
  if (s === m && m === h && s === 0) return false;
  return true;
}
start2();
