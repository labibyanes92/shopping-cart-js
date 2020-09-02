let plusBtn = Array.from(document.getElementsByClassName('btn-plus'));
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener('click', function () {
    plusBtn[i].previousElementSibling.innerText++;
    totalPrice();
  });
}


let minusBtn = document.getElementsByClassName('btn-moins');
for (let button of minusBtn) {
  button.addEventListener('click', function () {
    if (button.nextElementSibling.innerText > 0) {
      button.nextElementSibling.innerText--;
    }
    totalPrice();
  });
}


function totalPrice() {
    let price = document.getElementsByClassName('product-price');
    let quantity = document.getElementsByClassName('quantity');
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
      sum += price[i].innerText * quantity[i].innerText;
    }
    document.getElementById('prix-total').innerText = sum;
  }


let deleteBtn = Array.from(document.querySelectorAll('.btn-delete'));
deleteBtn.forEach((el) =>
  el.addEventListener('click', function () {
    el.parentElement.parentElement.remove();
    totalPrice();
  })
);

let react = document.getElementsByClassName('like');
console.log(react);
for (let likeReact of react) {
    likeReact.addEventListener('click', function turRed() {
        likeReact.style.color = 'red';
    });
}


let clear = document.getElementsByClassName('reset');
console.log(clear);
for (let itm of clear) {
    itm.addEventListener('click', function () {
        document.getElementById('prix-total').innerText = 0;
    });
}



