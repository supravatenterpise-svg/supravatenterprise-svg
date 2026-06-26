// BiteFlow interactive prototype
// This file controls the food data, cart state, screen transitions, and micro-interactions.

const foods = [
  {
    title: 'Spicy Tofu Bowl',
    price: 12.8,
    img: 'assets/spicy-bowl.svg',
    desc: 'Smoky tofu, citrus rice, crisp greens, and a warm chili glaze balanced for a clean finish.',
    meta: '18 min - 520 kcal'
  },
  {
    title: 'Sushi Garden Set',
    price: 16.4,
    img: 'assets/sushi-set.svg',
    desc: 'Three fresh rolls with sesame rice, avocado, salmon, pickled ginger, and a crisp side salad.',
    meta: '24 min - 430 kcal'
  },
  {
    title: 'Market Pizza',
    price: 14.2,
    img: 'assets/market-pizza.svg',
    desc: 'Charred sourdough crust, tomato, basil, roasted peppers, and melted farmhouse cheese.',
    meta: '21 min - shareable'
  },
  {
    title: 'Garden Crunch Salad',
    price: 10.9,
    img: 'assets/garden-salad.svg',
    desc: 'Leafy greens, tomato, corn, herbed cream, and lemon oil with a crunchy seed topping.',
    meta: '14 min - vegan'
  }
];

const cards = document.getElementById('cards');
const detail = document.getElementById('detail');
const drawer = document.getElementById('drawer');
const badge = document.getElementById('badge');
const cartList = document.getElementById('cartList');
const total = document.getElementById('total');

let selected = foods[0];
let qty = 1;
let cart = [];

function money(value) {
  return '$' + value.toFixed(2);
}

function renderCards() {
  cards.innerHTML = foods.map(function (food, index) {
    return '<article class="card" data-i="' + index + '">' +
      '<img class="food-img" src="' + food.img + '" alt="' + food.title + '">' +
      '<h3>' + food.title + '</h3>' +
      '<div class="meta">' + food.meta + '</div>' +
      '<div class="row">' +
        '<b class="price">' + money(food.price) + '</b>' +
        '<button class="add" data-add="' + index + '" aria-label="Add ' + food.title + '">+</button>' +
      '</div>' +
    '</article>';
  }).join('');
}

function openDetail(index) {
  selected = foods[index];
  qty = 1;

  document.getElementById('detailImg').src = selected.img;
  document.getElementById('detailTitle').textContent = selected.title;
  document.getElementById('detailPrice').textContent = money(selected.price);
  document.getElementById('detailDesc').textContent = selected.desc;

  updateQty();
  detail.classList.add('open');
}

function updateQty() {
  document.getElementById('qty').textContent = qty;
  document.getElementById('barPrice').textContent = money(selected.price * qty);
}

function addToCart(item, count) {
  item = item || selected;
  count = count || qty;

  const existingItem = cart.find(function (cartItem) {
    return cartItem.title === item.title;
  });

  if (existingItem) {
    existingItem.qty += count;
  } else {
    cart.push(Object.assign({}, item, { qty: count }));
  }

  badge.textContent = cart.reduce(function (sum, cartItem) {
    return sum + cartItem.qty;
  }, 0);

  badge.classList.add('show');
  badge.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.34)' },
    { transform: 'scale(1)' }
  ], {
    duration: 360,
    easing: 'ease-out'
  });

  renderCart();
}

function renderCart() {
  if (!cart.length) {
    cartList.innerHTML = '<div class="empty"><b>Your cart is ready</b><p class="meta">Add a meal to start checkout.</p></div>';
    total.textContent = money(0);
    return;
  }

  cartList.innerHTML = cart.map(function (cartItem) {
    return '<div class="cart-row">' +
      '<img src="' + cartItem.img + '" alt="' + cartItem.title + '">' +
      '<div><h4>' + cartItem.title + '</h4><span class="meta">Qty ' + cartItem.qty + '</span></div>' +
      '<b>' + money(cartItem.price * cartItem.qty) + '</b>' +
    '</div>';
  }).join('');

  const subtotal = cart.reduce(function (sum, cartItem) {
    return sum + cartItem.price * cartItem.qty;
  }, 0);

  total.textContent = money(subtotal + 1.9);
}

function fly() {
  const accent = document.createElement('div');
  accent.className = 'fly';
  accent.style.left = '112px';
  accent.style.top = '285px';

  document.querySelector('.app').appendChild(accent);

  setTimeout(function () {
    accent.remove();
  }, 760);
}

renderCards();
renderCart();

cards.addEventListener('click', function (event) {
  const addButton = event.target.closest('[data-add]');

  if (addButton) {
    event.stopPropagation();
    addToCart(foods[Number(addButton.dataset.add)], 1);
    fly();
    return;
  }

  const card = event.target.closest('.card');

  if (card) {
    openDetail(Number(card.dataset.i));
  }
});

document.getElementById('backBtn').onclick = function () {
  detail.classList.remove('open');
};

document.getElementById('plus').onclick = function () {
  qty += 1;
  updateQty();
};

document.getElementById('minus').onclick = function () {
  qty = Math.max(1, qty - 1);
  updateQty();
};

document.getElementById('addDetail').onclick = function () {
  addToCart();
  fly();

  setTimeout(function () {
    drawer.classList.add('open');
  }, 230);
};

document.getElementById('cartBtn').onclick = function () {
  drawer.classList.add('open');
};

document.getElementById('cartNav').onclick = function () {
  drawer.classList.add('open');
};

document.getElementById('closeDrawer').onclick = function () {
  drawer.classList.remove('open');
};

document.getElementById('payBtn').onclick = function () {
  if (cart.length) {
    document.getElementById('success').classList.add('show');
  }
};

document.getElementById('doneBtn').onclick = function () {
  cart = [];
  renderCart();
  badge.classList.remove('show');
  drawer.classList.remove('open');
  document.getElementById('success').classList.remove('show');
};

document.getElementById('favBtn').onclick = function (event) {
  event.currentTarget.textContent = event.currentTarget.textContent === '\u2661' ? '\u2665' : '\u2661';
};

document.querySelectorAll('.nav button[data-tab]').forEach(function (button) {
  button.onclick = function () {
    document.querySelectorAll('.nav button').forEach(function (navButton) {
      navButton.classList.remove('active');
    });

    button.classList.add('active');
    document.getElementById('content').className = 'content ' + (button.dataset.tab === 'home' ? '' : 'mode-' + button.dataset.tab);
  };
});
