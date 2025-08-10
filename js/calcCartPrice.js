


function calcCartPriceAndDelivery (){
 const deliveryCost = document.querySelector('.delivery-cost');
 const cartDelivery = document.querySelector('[data-cart-delivery]');
    let totalPrice = 0;const totalPriceEl = document.querySelector('.total-price');
const cartItems = document.querySelectorAll('.cart-item');

cartItems.forEach(function(item){
  const amountEl=  item.querySelector('[data-counter]');
  const priceEl = item.querySelector('.price__currency');
      


  const currentprice=  parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
  totalPrice += currentprice;
 
}) 



totalPriceEl.innerText = totalPrice;


if(totalPrice > 0){
  cartDelivery.classList.remove('none')
}else{
  cartDelivery.classList.add('none')
}



if (totalPrice >=600 ){

  deliveryCost.classList.add('free');
  deliveryCost.innerText = 'Бесплатная доставка';
} else { 
deliveryCost.classList.remove('free');
  deliveryCost.innerText = '350₽';
} 
}