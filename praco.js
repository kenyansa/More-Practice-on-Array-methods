const numbers =[20,14,20,43,92];
//Mapping an array of numbers using a function containing an argument
const newArr = numbers.map(x=>x*2);
const squareroots = newArr.map((num) =>Math.sqrt(num));
console.log(newArr);
console.log(squareroots)
//Get the full name for each person:
const persons = [
  { firstname: "Caro", lastname: "Hera" },
  { firstname: "Justine", lastname: "Kenyansa" },
  { firstname: "Matilda", lastname: "Awuor" },
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
//Array.prototype.find(): returns the first element in the provided array that satisfies the provided testing function.
const array = [2,3,4,5,6,7, 40,45];
const bigNum = array.find(element=>element>30);
console.log(bigNum);
//Find an object in an array by one of its properties
const matundaYaliyobaki = [
    {jina:'papai', idadi: 5},
    {jina: 'tofa', idadi: 10},
    {jina: 'avokado', idadi: 20}
];
function niEmbe(tunda){
    return tunda.jina ==='tofa';
}
console.log(matundaYaliyobaki.find(niEmbe));
//Using arrow function and destructuring
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result)

