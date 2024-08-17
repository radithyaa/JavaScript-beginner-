const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);

function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}

console.log(evenNumbers);
console.log(oddNumbers);
