// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

let removeCartItemButtons = document.getElementsByClassName('normal')
for(let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName("cart-row") /* idk which class i should use here */ 
    for(let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity input')[0]
        console.log(priceElement, quantityElement)
    }
}
  

// Get the product object from the id
// function getProductById(productId) {
//   const products = [
//     {
//       id: 0,
//       image: 'img/products/f1.jpg',
//       product: 'Fashionable Shirt 1',
//       price: 15,
//     },
//     {
//       id: 1,
//       image: 'img/products/f2.jpg',
//       product: 'Fashionable Shirt 2',
//       price: 15,
//     },
//     {
//       id: 2,
//       image: 'img/products/f3.jpg',
//       product: 'Fashionable Shirt 3',
//       price: 15,
//     },
//     {
//       id: 3,
//       image: 'img/products/f4.jpg',
//       product: 'Fashionable Shirt 4',
//       price: 15,
//     },
//     {
//       id: 4,
//       image: 'img/products/f5.jpg',
//       product: 'Fashionable Shirt 5',
//       price: 15,
//     },
//     {
//       id: 5,
//       image: 'img/products/f6.jpg',
//       product: 'Fashionable Shirt',
//       price: 15,
//     },
//     {
//       id: 6,
//       image: 'img/products/f7.jpg',
//       product: 'Fashionable Pants',
//       price: 15,
//     },
//     {
//       id: 7,
//       image: 'img/products/f8.jpg',
//       product: 'Fashionable Blouse',
//       price: 15,
//     },
//     {
//       id: 8,
//       image: 'img/products/n1.jpg',
//       product: 'Formal Shirt 1',
//       price: 15,
//     },
//     {
//       id: 9,
//       image: 'img/products/n2.jpg',
//       product: 'Formal Shirt 2',
//       price: 15,
//     },
//     {
//       id: 10,
//       image: 'img/products/n3.jpg',
//       product: 'Formal Shirt 3',
//       price: 15,
//     },
//     {
//       id: 11,
//       image: 'img/products/n4.jpg',
//       product: 'Fashionable T-Shirt',
//       price: 15,
//     },
//     {
//       id: 12,
//       image: 'img/products/n5.jpg',
//       product: 'Formal Shirt 4',
//       price: 15,
//     },
//     {
//       id: 13,
//       image: 'img/products/n6.jpg',
//       product: 'Formal Shorts',
//       price: 15,
//     },
//     {
//       id: 14,
//       image: 'img/products/n7.jpg',
//       product: 'Formal Shirt 5',
//       price: 15,
//     },
//     {
//       id: 15,
//       image: 'img/products/n8.jpg',
//       product: 'Formal Shirt 6',
//       price: 15,
//     },
//   ];
  
// }
