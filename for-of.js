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
// const articleParagraphs = document.querySelectorAll("article > p");

// for (const paragraph of articleParagraphs) {
//   paragraph.classList.add("read");
// }
//More iteration through objects
const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
    personalQuote: "You're never too old to learn something new",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar territory",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "Always remember you’re unique, just like everyone else",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a woman rolling her eyes",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote:
      "You don’t have to see the whole staircase, just take the first step",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:
      "Failure is not the opposite of success: it’s part of success",
  },
];
function firstNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.personalQuote);
  }
}
firstNamePrinter(users);