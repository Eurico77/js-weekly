let nameForShip = prompt('What is your ship name?');
let askNext = prompt('Do you want to continue a new dobre ?');
let next = false;
let count = 0;

while (next !== true) {
  if (askNext === 'no') {
    next = true;
  } else {
    askNext = prompt('Do you want to continue a new dobre ?');
  }
  count++;
}

alert(`The ship ${nameForShip} have ${count} dobres`);

