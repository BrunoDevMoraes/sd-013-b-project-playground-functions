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
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = mouse - cat1;
  let distMouseCat2 = mouse - cat2;
  if(distMouseCat1 < 0){
    distMouseCat1 = (-distMouseCat1);
  }
  if(distMouseCat2 < 0){
    distMouseCat2 = (-distMouseCat2);
  }
  if(distMouseCat1 > distMouseCat2){
    return 'cat2';
  }
    else if(distMouseCat2 > distMouseCat1){
      return 'cat1';
    }
      else{
        return 'os gatos trombam e o rato foge';
      }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let strangeArray = [];
  for(let i = 0; i < arrayNumber.length; i += 1){
    if(arrayNumber[i] % 3 === 0 && arrayNumber[i] % 5 === 0){
      strangeArray.push('fizzBuzz');
    }
      else if(arrayNumber[i] % 3 === 0 && arrayNumber[i] % 5 != 0){
        strangeArray.push('fizz');
      }
        else if(arrayNumber[i] % 3 != 0 && arrayNumber[i] % 5 === 0){
          strangeArray.push('buzz');
        }
          else if(arrayNumber[i] % 3 != 0 && arrayNumber[i] % 5 != 0){
            strangeArray.push('bug!');
          }
  }
  return strangeArray;
}

// Desafio 9
function encode(decodedString) {
  string2 = '';
  for(let i = 0; i < decodedString.length; i += 1){
    if(decodedString[i] === 'a'){
      string2 += '1';
    }
      else if(decodedString[i] === 'e'){
        string2 += '2';
      }
        else if(decodedString[i] === 'i'){
          string2 += '3';
        }
          else if(decodedString[i] === 'o'){
            string2 += '4';
          }
            else if(decodedString[i] === 'u'){
              string2 += '5';
            }
              else{
                string2 += decodedString[i];
              }
  }
  return string2;  
}

function decode(codedString) {
  let string2 = '';
  for(let i = 0; i < codedString.length; i += 1){
    if(codedString[i] === '1'){
      string2 += 'a';
    }
      else if(codedString[i] === '2'){
        string2 += 'e';
      }
        else if(codedString[i] === '3'){
          string2 += 'i';
        }
          else if(codedString[i] === '4'){
            string2 += 'o';
          }
            else if(codedString[i] === '5'){
              string2 += 'u';
            }
              else{
                string2 += codedString[i];
              }
  }
  return string2;
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
