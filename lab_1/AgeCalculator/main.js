var ageInYears = prompt("What is your age in years?")
while (isNaN(ageInYears)) {
  alert("Your input wasn't a number")
  ageInYears = prompt("What is your age in years?")
}

alert(`You have lived ${ageInYears * 365} days in life !!!!`)
