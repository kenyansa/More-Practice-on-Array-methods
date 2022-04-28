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
