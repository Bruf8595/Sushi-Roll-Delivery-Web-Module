
/*
window.addEventListener("click", function(event){
     //Является ли елемент минусом
if(event.target.dataset.action ==='plus'){
 

  const counterWrapper = event.target.closest(".counter-wrapper");


  const counter = counterWrapper.querySelector('[data-counter]');
  counter.innerText = ++counter.innerText ;
}
 //Является ли елемент плюсом
if(event.target.dataset.action ==='minus'){

    const counterWrapper = event.target.closest(".counter-wrapper");


    const counter = counterWrapper.querySelector('[data-counter]');
    if(parseInt(counter.innerText) > 1){ //ИЛИ counter.innerText > 1
        counter.innerText = --counter.innerText ;
            }
 }

});*/