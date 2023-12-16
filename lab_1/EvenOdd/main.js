var num = prompt("Enter an integer number?")

if (num % 2 == 1) {
  console.log(`${num} is ODD`)
}
else if (num % 2 == 0) {
  console.log(`${num} is EVEN`)
}
else {
  console.log("Not an integer number!!!!")
}