// Using for..of instead of .map()
const students = ["Justine", "Hera", "Matilda", "Ruth"];
const rollCall = [];

for (const student of students) {
  rollCall.push(student + " the wizard");
}
console.log(rollCall)