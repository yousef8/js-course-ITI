let input = document.getElementById("text1")
let output = document.getElementById("text2")

input.addEventListener("keyup", () => {
  output.innerText = `${input.value}`
})

// Lobster
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("h2").innerHTML = "Font Name : Lobster"
  output.classList.value = "lobster-font"
})


// Wallpet
document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("h2").innerHTML = "Font Name : Wallpet"
  output.classList.value = "wallpet-font"
})


// Shadow
document.getElementById("btn3").addEventListener("click", () => {
  document.getElementById("h2").innerHTML = "Font Name : Shadows"
  output.classList.value = "shadow-font"
})

// Zcool
document.getElementById("btn4").addEventListener("click", () => {
  document.getElementById("h2").innerHTML = "Font Name : Zcool"
  output.classList.value = "zcool-font"
})
