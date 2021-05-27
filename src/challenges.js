// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }
      else{
        return false;
      }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(fullString) {
  let res = fullString.split(" ");
  return res;
}

// Desafio 4
function concatName(arrayStrings) {
  let cont = 0;
  for (let i = 0; i < arrayStrings.length; i += 1) {
    cont += 1;
  } 
  let cont2 = cont - 1;
  let firstAndLast =  arrayStrings[cont2] + ', ' + arrayStrings[0];
  return firstAndLast; 
}

// Desafio 5
function footballPoints(wins, ties) {
  totalPoints = (wins*3) + (ties*1);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let contador = 1;
  let biggestNumber = arrayOfNumbers[0];
  for(let i = 1; i <= arrayOfNumbers.length; i += 1){
    if(arrayOfNumbers[i] === biggestNumber){
      contador += 1; 
    }
      else if(arrayOfNumbers[i] > biggestNumber){
        biggestNumber = arrayOfNumbers[i];
        contador = 1;
      }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
