/*
//Находим кнопки и счетчик
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


//Отсежываем клик на кнопку миеус  btnMinus
btnMinus.addEventListener("click", function(){
    //проверка чтобы счетчик был больше чем 1
    if(parseInt(counter.innerText) > 1){ //ИЛИ counter.innerText > 1
counter.innerText = --counter.innerText ;
    }
});

//Отсежываем клик на кнопку Плюс   btnPlus
btnPlus.addEventListener("click", function(){   
        counter.innerText = ++counter.innerText ;
});*/