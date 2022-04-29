// Using for..of instead of .map()
const students = ["Justine", "Hera", "Matilda", "Ruth"];
const rollCall = [];

for (const student of students) {
  rollCall.push(student + " the wizard");
}
//calling the empty array
console.log(rollCall)

// using map() with a function declaration
function studentRollCall(studentName){
    return studentName + " the wizard"
}
const studentNames = ["Justine", "Hera", "Matilda", "Ruth"];
const rollCallz = studentNames.map(studentRollCall);
//calling the created array
console.log(rollCallz);