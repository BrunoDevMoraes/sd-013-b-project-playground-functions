// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects;
  for(let i = 0; i < arrayTech.lenght; i += 1){
    let objectoTemp;
    objectoTemp['tech'] = arrayTech[i];
    objectoTemp['name'] = name;
    arrayObjects.push(objectoTemp);
  }
  return arrayObjects;
}

// Desafio 11
function generatePhoneNumber(array) {
  for( let i = 0; i < array.lenght; i += 1){
    let cont = 0;
    if (array[i] < 0 || array[i] > 9){
      return 'não é possível gerar um número de telefone com esse valores';
    } 
    for(let j = 0; j < array.lenght; j += 1){
      if(array[i] === array[j]){
        cont += 1;
      }
      if(cont >= 3){
        return 'não é possível gerar um número de telefone com esse valores';
      }
    }
  }

  if (array.lenght === 11){
    let string = '(';
    for(let i = 0; i < array.lenght; i += 1){
      if(i < 2){
       string[i+1] = array[i];
      }
        else if(i === 2){
          string[i+1] = ') ' + array[i];
        }
          else if(i > 2 && i < 7){
            string[i+2] = array[i];
          }
            else if(i === 7){
              string[i+2] = '-' +array[i];
            }
              else if(i > 7){
                string[i+3] = array[i];
              }
    }
    return string;
  }
    else if (array.lenght != 11){
      return 'Array com tamanho incorreto';
    }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
