function checkPasswd() {
  var passwd = document.getElementsByName("passwd")[0].value
  var secret = document.getElementById("secret")

  if (passwd !== "12345") {
    secret.classList.add("hide")
    alert("Wrong Password !!!!")
    return
  }

  secret.classList.remove("hide")
  return
}