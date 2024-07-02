//อธิป พูลเขตวิทย์ 660610805
function primeNumber(a) {
    var check = false;
    if (a <= 3)
        return 'YES';
    else
        for (var i = 2; i < a; i++)
            if (a % i === 0)
                return 'NO';
            else
                check = false;
    if (check = true)
        return 'YES';
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
