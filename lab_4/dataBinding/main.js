var avatar = document.getElementById("avatar")
var fname = document.getElementById("name")
var position = document.getElementById("position")

function showElon() {
  avatar.src = "./imgs/elon.jpg"
  fname.innerText = "Elon Musk"
  position.innerText = "CEO of spaceX, Twitter, and Tesla"
}

function showLinus() {
  avatar.src = "./imgs/linus.jpeg"
  fname.innerText = "Linus Torvalds"
  position.innerText = "Create for Linux and Git"
}