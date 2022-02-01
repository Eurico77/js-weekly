let shipName = prompt('What is the name of your ship?');
let caracterOfOcult = prompt('What caracter do you want to ocult?');
let replaceCaracter = prompt('What caracter do you want to replace?');

for (let i = 0; i < shipName.length; i++) {
  if (shipName[i] === caracterOfOcult) {
    shipName = shipName.replace(caracterOfOcult, replaceCaracter);
  }
}

alert(shipName);