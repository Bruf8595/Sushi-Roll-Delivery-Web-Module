

window.addEventListener("click", function(event){

let counter;

if(event.target.dataset.action ==='plus'|| event.target.dataset.action ==='minus'){

 const counterWrapper = event.target.closest(".counter-wrapper");


  counter = counterWrapper.querySelector('[data-counter]');   
 
 
}

 
 //Является ли елемент минусом
if(event.target.dataset.action ==='plus'){
 counter.innerText = ++counter.innerText ;
}
//Является ли елемент плюсом
if(event.target.dataset.action ==='minus'){
/*
//проверка наличия товара в корзине
     if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){
    //удаление из корзины
      event.target.closest('.cart-item').remove();
     }
//первый вариант
*/
   if(parseInt(counter.innerText) > 1){ //ИЛИ counter.innerText > 1
       counter.innerText = --counter.innerText ;
     }//второй вариант//  
   else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){
    event.target.closest('.cart-item').remove();
//статус корзины
    toggleCartStatus();
	//пересчет стоимости корзины
    calcCartPriceAndDelivery ()
   }

}

if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
	//пересчет стоимости корзины
  calcCartPriceAndDelivery ()
}
});