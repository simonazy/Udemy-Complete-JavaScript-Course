const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];
for (let i = 0; i < jonasArray.length(); i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}


//continue and break 
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}