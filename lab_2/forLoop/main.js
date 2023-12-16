// 1
console.log("1. Print all numbers between -10 and 19?")

for (var i = -10; i <= 19; ++i) {
  console.log(i)
}

// 2
console.log("2. Print all even numbers between 10 and 40?")

for (var i = 10; i <= 40; i += 2) {
  console.log(i)
}

// 3
console.log("3. Print all odd numbers between 300 and 333?")

for (var i = 300; i <= 333; ++i) {
  if (i % 2) {
    console.log(i)
  }
}

// 4
console.log("4. Print all numbers divisible by 5 and 3 between 5 and 50?")

for (var i = 5; i <= 50; ++i) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(i)
  }
}