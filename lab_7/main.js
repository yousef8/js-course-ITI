function parent() {
  let coins = 5;

  return function () {
    return coins--;
  }
}

const child1 = parent()
const child2 = parent()


console.log(`Childe 1 coins : ${child1()}`)
console.log(`Childe 1 coins : ${child1()}`)



console.log(`Childe 2 coins : ${child2()}`)
console.log(`Childe 2 coins : ${child2()}`)