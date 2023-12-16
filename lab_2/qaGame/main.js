function startGame() {
  var name = prompt("Hi, Say Your Name");
  alert(`Hi ${name}, please answer the following Question`);

  var age = prompt("How old are you?!")
  if (isNaN(age) || age == 18) { alert("Please start again and say your age"); return; }

  if (age < 18) { alert("Sorry, you are a child"); return; }

  alert("Ok! Good enough to complete")

  isProgGood = prompt("Reply by yes or No | do you think programming is good for you ?")
  if (isProgGood.toLowerCase() !== "yes" && isProgGood.toLowerCase() !== "no") { alert("I Said Reply by YES OR NO 😒"); return; }
  if (isProgGood.toLowerCase() === "yes") { alert(`${name}, Sorry to say it | but you Have A mental issues 🙂`); return; }

  alert("Mee too , thank you for telling us , I will give you a somthing")

  var bonus = prompt("reply by ( advise || info || thanks )")

  if (bonus.toLowerCase() !== "advise" && bonus.toLowerCase() !== "info" && bonus.toLowerCase() !== "thanks") {
    alert("😒😒😒")
    return;
  }

  if (bonus.toLowerCase() === "advise") {
    alert(`${name}, the secret of getting a head is getting started , so start now 👌`);
    return;
  }

  if (bonus.toLowerCase() === "info") {
    alert("The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️")
    return;
  }

  alert(`Thank you ${name}`)
}