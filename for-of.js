//used to iterate through objects
// syntax: for (variable of iterable) {
//   statement;
// }
//example 1
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// example 2
const iterabo = [10, 20, 30];

for (let value of iterabo) {
  value += 1;
  console.log(value);
}
//example 3: iterating over a set
const xx = new Set([1, 1, 2, 2, 3, 3]);

for (const value of xx) {
  console.log(value);
}
// Iterating over a DOM collection
const articleParagraphs = document.querySelectorAll("article > p");

for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}