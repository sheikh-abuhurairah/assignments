function checkEvenOdd() {
  let input = prompt("Enter a number:");
  let num = parseInt(input); // Convert input to a number

  if (isNaN(num)) {
    console.log("Invalid number!");
  } else {
    console.log(num % 2 === 0 ? "Even" : "Odd");
  }
}

checkEvenOdd();
