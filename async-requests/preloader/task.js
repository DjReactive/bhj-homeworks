let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('loadend', () => setCurrencyBlock());
xhr.send();

function setCurrencyBlock () {
  const divItems = document.querySelector("#items");
  let div, curObj = JSON.parse(xhr.response);
  let currency = curObj.response.Valute;
  for (let key in curObj.response.Valute) {
    div = `
    <div class="item">
      <div class="item__code">
        ${currency[key].CharCode}
      </div>
      <div class="item__value">
        ${currency[key].Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>`;
    divItems.insertAdjacentHTML("afterBegin", div);
  }
  document.querySelector('#loader').classList.remove('loader_active');
}
