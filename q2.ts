//อธิป พูลเขตวิทย์ 660610805

function arrayStringify(a) {
  let s:string = '';
  for(let b of a)
    s += b;
  return s;  
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
