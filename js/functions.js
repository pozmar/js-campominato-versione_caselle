//funzione che mi dice se i numeri si trovano dentro a un array
function isInArray(num, arrNum){
  for(var i = 0; i < arrNum.length; i++ ){
    if (num === arrNum[i]){
      return true;
    }
  }
  return false;
}
//creo funzione per generare i numeri: parametri: numeri random, numero massimo e minimo. Crea un contenitore per le mine; finchè il numero dei numeri random è minore alle mine e se il numero è diverso da quello dell'array, inseriscilo dentro a quest'ultimo. dalla funzione mi ritorna la var mine
function generator(randomNumbers, min, max){
  var mine = [];
  while(mine.length < randomNumbers){
    var actualNumbers = Math.floor(Math.random() * ((max + 1) - min) + min);
    if(!isInArray(actualNumbers, mine)){
      mine.push(actualNumbers);
    }
  }
  return mine;
}
