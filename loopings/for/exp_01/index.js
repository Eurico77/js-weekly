let name = 'John Doe';
let newName = '';

for (let i = 0; i < name.length; i++) {
  if (name[i] === 'o') {
    newName += 'u';
  }
  else {
    newName += name[i];
  }
}

console.log(newName);