const elements = document.getElementsByClassName('product');
let products = {};
for (let i=0; i < elements.length; i++) {
  products[elements[i].dataset.id] = elements[i];
}
const container = {
  button: "product__add",
  plus: "product__quantity-control_inc",
  minus: "product__quantity-control_dec",
  value: "product__quantity-value"
}
Array.from(elements).forEach( p => {
  for (let key in container) {
    const el = p.querySelector(`.${container[key]}`);
    if (key === "plus" || key === "minus") el.onclick = changeValue;
    if (key === "button") el.onclick = addToCart;
  }
});

function getProduct(el, classname) {
  const id = el.closest(".product").dataset.id;
  return {
    index: id,
    element: products[id].querySelector(`.${classname}`)
  }
}

function changeValue() {
  const product = getProduct(this, container.value);
  const div = product.element;
  let value = Number(div.textContent);
  if (this.classList.contains(container.plus)) value++;
  if (this.classList.contains(container.minus) && value > 1) value--;
  div.textContent = value;
}

function resetValue(id) {
  products[id].querySelector(`.${container.value}`).textContent = 1;
}

function addToCart() {
  const product = getProduct(this, container.value);
  const cart = document.querySelector(".cart__products");
  const image = products[product.index].querySelector("img");
  let value, div = checkItemsOnCart(product.index);
  if (div !== null) {
    div.querySelector(".cart__product-count").textContent =
    Number(div.querySelector(".cart__product-count").textContent) + Number(product.element.textContent);
  }
  else {
    div = `
    <div class="cart__product" data-id="${product.index}">
        <img class="cart__product-image" src="${image.getAttribute('src')}">
        <div class="cart__product-count">${product.element.textContent}</div>
    </div>`;
    cart.insertAdjacentHTML("afterBegin", div);
  };
  resetValue(product.index);
}

function checkItemsOnCart(id) {
  const cartItems = document.querySelectorAll(".cart__product");
  for (let i=0; i < cartItems.length; i++) {
    if (cartItems[i].dataset.id === id) return cartItems[i];
  }
  return null;
}
