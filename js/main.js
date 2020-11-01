//costanti

var MAX_NUM_EASY = 100;
var MAX_NUM_MEDIUM = 64;
var MAX_NUM_HARD = 36;
var MIN_NUM = 1;
var NUM_MINE = 16;
var mine = generator(NUM_MINE, MIN_NUM, MAX_NUM_EASY);
//devo prendere gli slot dentro a ciascuna dashboard per lavorare sulle differenze dei tre livelli
//con il querySelectorAll prendo tutti gli elementi dentro alla classe inserita
var easySlots = document.querySelectorAll(".easy > * ")
var mediumSlots = document.querySelectorAll(".medium > * ")
var hardSlots = document.querySelectorAll(".hard > * ")
//scegliere il livello
//creo un contenitore per le tabelle
var dashEl = document. getElementsByClassName("dashboard");
//con il click seleziono il livello
document.getElementById("level").addEventListener("change", function(event){
  //prendo il valore del select
  var difficulty = event.target.value;
  //creo un switch che dica in base al livello quante mine e quante caselle ci sono
  switch (difficulty) {
    case "easy":
    var mine = generator(NUM_MINE, MIN_NUM, MAX_NUM_EASY);
      console.log(mine)
    break;
    case "medium":
    var mine = generator(NUM_MINE, MIN_NUM, MAX_NUM_MEDIUM);
    console.log(mine)
    break;
    case "hard":
    var mine = generator(NUM_MINE, MIN_NUM, MAX_NUM_HARD);
    console.log(mine)
    break;
  }
  //con il ciclo for attraverso i tre div dashboard, in base al livello seleziono il display a ciascuna tabella
  for(var i = 0; i < dashEl.length; i++){
    if(dashEl[i].className.includes(difficulty)){
      dashEl[i].style.display = "flex";
    }else{
      dashEl[i].style.display = "none";
    }
  }
})
//creo un ciclo per assegnare un valore a tutte le caselle. Versione Easy

for(var i = 0; i < easySlots.length; i++){
  easySlots[i].value = i + 1;

  easySlots[i].addEventListener("click", function(event){
    var slotValue = parseInt(event.target.value);

    if(isInArray(slotValue, mine)){
      event.target.style.backgroundColor = "red";

    }else{
      event.target.style.backgroundColor = "green";
    }
  })
  easySlots[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
  })
}
//livello Medium

for(var i = 0; i < mediumSlots.length; i++){
  mediumSlots[i].value = i + 1;

  mediumSlots[i].addEventListener("click", function(event){
    var slotValue = parseInt(event.target.value);

    if(isInArray(slotValue, mine)){
      event.target.style.backgroundColor = "red";

    }else{
      event.target.style.backgroundColor = "green";
    }
  })
  mediumSlots[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
  })
}
//livello hard

for(var i = 0; i < hardSlots.length; i++){
  hardSlots[i].value = i + 1;
  hardSlots[i].addEventListener("click", function(event){
    var slotValue = parseInt(event.target.value);

    if(isInArray(slotValue, mine)){
      event.target.style.backgroundColor = "red";

    }else{
      event.target.style.backgroundColor = "green";
    }
  })
  hardSlots[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
  })
}
