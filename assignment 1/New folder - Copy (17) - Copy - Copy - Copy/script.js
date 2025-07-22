// 34) Log tasks
let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(t => {
  console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`);
});

// 35) Add "status": "active" to employees
let employees = [
  { name: "Ali" },
  { name: "Zara" },
  { name: "Umar" }
];
let activeEmployees = employees.map(emp => ({ ...emp, status: "active" }));
console.log(activeEmployees);
