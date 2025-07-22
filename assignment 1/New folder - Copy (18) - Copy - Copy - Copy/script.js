// 20) forEach names
let names = ["Ali", "Zara", "Umar"];
names.forEach(name => console.log(name));

// 21) map student names
const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let studentNames = students.map(s => s.name);
console.log(studentNames);

// 22) Students with marks > 50
let passedStudents = students.filter(s => s.marks > 50);
console.log(passedStudents);

// 23) Find Zara
let zara = students.find(s => s.name === "Zara");
console.log(zara);

// 24) Print name and marks
students.forEach(s => console.log(`${s.name} - ${s.marks}`));