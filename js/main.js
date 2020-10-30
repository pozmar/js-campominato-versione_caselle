//costanti

var MAX_NUM_EASY = 100;
var MAX_NUM_MEDIUM = 80;
var MAX_NUM_HARD = 50;
var MIN_NUM = 1;
var NUM_MINE = 16;
var ROUND = 84;
var mine = [];
//creo i 16 numeri random
while (mine.length < NUM_MINE){
  var randomNumbers = Math.floor(Math.random() * ((MAX_NUM_EASY + 1) - MIN_NUM) + MIN_NUM);
  if(!isInArray(randomNumbers, mine)){
    mine.push(randomNumbers);
  }
}

//creo un contenitore per le caselle
var slotElements = document.getElementsByClassName("slot");
//creo un ciclo per assegnare un valore a tutte le caselle
for(var i = 0; i < slotElements.length; i++){
  //assegno un valore alle caselle
slotElements[i].value = i;
//al click le caselle prendono un valore
slotElements[i].addEventListener("click", function(event){
  //prendo il valore numerico delle caselle quando clicco
  var slotValue = parseInt(event.target.value);
  //se il valore delle caselle si trova dentro all'array delle mine allora il bg sarà rosso
  if(isInArray(slotValue, mine)){
    event.target.style.backgroundColor = "red";
  }else{
    event.target.style.backgroundColor = "green";
  }
})
slotElements[i].addEventListener("contextmenu", function(event){
event.preventDefault();
event.target.style.backgroundColor = "yellow";
})
}
