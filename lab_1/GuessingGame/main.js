var secretNum = 7

var guess = prompt("Guess a number !!!")

if (guess == 7) {
  alert("You guessed it right, the number is 7")
}
else if (guess < 7) {
  alert("Too low")
}
else if (guess > 7) {
  alert("Too High")
}