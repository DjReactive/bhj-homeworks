function start() {
  const image = document.getElementById('cookie');
  const w = Number(image.width);
  let lastClickTime, now;
  let counter = document.getElementById('clicker__counter');
  let speed = document.getElementById('clicker__speed');
  image.onclick = function () {
    image.width = w + 100;
    counter.textContent = Number(counter.textContent) + 1;  // клики
    if (lastClickTime === undefined) lastClickTime = 1000;
    else lastClickTime = now;
    now = Date.now();
    speed.textContent = (1000 / (now - lastClickTime)).toFixed(2);
    setTimeout(() => image.width = w, 50);
  }
}

start ();
