//อธิป พูลเขตวิทย์ 660610805

function primeNumber(a) {
  let check:Boolean = false;
  if(a <= 3)
    return 'YES';
  else for(let i:number = 2 ; i < a ; i++)
    if(a%i === 0)
      return 'NO';
    else check = false;
  if(check = true)
    return 'YES';
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
